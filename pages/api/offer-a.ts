import { Prisma } from "@prisma/client";
import { ethers } from "ethers";
import { NextApiHandler } from "next";
import { prisma } from "../../lib/prisma";
import { verifyMarried } from "../../lib/verify";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // verify signature

      if (!req.body.nonce || !req.body.signature) {
        return res.status(400).json({
          message: "no valid signature",
        });
      }

      const hash = ethers.utils.keccak256(
        ethers.utils.defaultAbiCoder.encode(["string"], [req.body.nonce])
      );

      const message = ethers.utils.arrayify(hash);
      const verfiyAddress = ethers.utils.verifyMessage(
        message,
        req.body.signature
      );
      if (verfiyAddress != req.body.Aaddress) {
        return res.status(400).json({
          message: "error signature",
        });
      }

      const data = {
        Aaddress: req.body.Aaddress.toLowerCase(),
        Aname: req.body.Aname,
        Asignature: req.body.signature,
        Acomment: req.body.Acomment,
        cover: req.body.cover,
        bgIndex: Math.floor(Math.random() * 9) + 1,
        burnAuth: req.body.burnAuth,
        nftName: req.body.nftName,
        expirationDate: req.body.expirationDate,
      };
      if (!data.cover) {
        return res.status(400).json({
          message: "cover picture empty",
        });
      }
      if (!data.Aname) {
        return res.status(400).json({
          message: "name empty",
        });
      }
      if (data.burnAuth === undefined || data.burnAuth === null || data.burnAuth < 0 || data.burnAuth > 3) {
        return res.status(400).json({
          message: "invalid burnauth",
        });
      }
      if (!data.nftName) {
        return res.status(400).json({
          message: "nftName empty",
        });
      }

      console.log(req.body);
      console.log('data', data);

      // one offer one day
      /*const result = await prisma.offers.findFirst({
        where: {
          Aaddress: data.Aaddress,
          status: {
            not: -1,
          },
          type: 0,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      console.log("result", result);
      if (result) {
        return res.status(400).json({
          message: "you have not finished offer",
        });
      }*/
      // create offer
      const offer = await prisma.offers.create({
        data: data,
      });
      console.log('offer', offer);
      if (offer) {
        delete offer.Asignature;
        delete offer.Bsignature;
        res.status(200).json(offer);
      }
    } catch (e) {
      console.error(e);
      res.status(400).json({
        message: "create offer error",
      });
      return;
    }
  } else {
    res.status(404).send({
      message: "error",
    });
    return;
  }
};

export default handler;
