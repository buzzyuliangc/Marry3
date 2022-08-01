import { Prisma } from "@prisma/client";
import { ethers } from "ethers";
import { NextApiHandler } from "next";
import { prisma } from "../../lib/prisma";
import { verifyMarried } from "../../lib/verify";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const Aaddress = req.query.Aaddress as string;
      const offers = await prisma.offers.findMany({
        where: {
          Aaddress: Aaddress.toLowerCase(),
          status: {
            not: -1,
          },
          type: 0,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      if (!offers) {
        return res.status(400).json({
          message: "no offer",
        });
      } else {
        offers.forEach(function (offer) {
          delete offer.Asignature;
          delete offer.Bsignature;
        });
        res.status(200).json(offers);
      }
    } catch (e) {
      console.error(e);
      res.status(400).json({
        message: "get offer error",
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
