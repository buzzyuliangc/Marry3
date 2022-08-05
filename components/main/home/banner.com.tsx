import { t } from "@lingui/macro";
import { Trans } from "@lingui/react";
import { Collapse } from "antd";
import { useObserver } from "mobx-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Banner } from "../common/banner";
import { Header } from "../common/header.com";
import styles from "./../../../pages/home/home.module.less";

export const MainBanner = (props: {}) => {
  const [offerId, setOfferId] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      setOfferId(router.query.id as string);
    }
  }, [router.query.id]);
  return useObserver(() => (
    <>
      {offerId ? (
        <Banner
          onclick={() => {
            router.push(`/offer/${offerId}`);
          }}
        />
      ) : null}
      <div className={styles.bg} id="bg-index"></div>
      <div className={styles.Page1}>
        <div className={styles.header_wrapper}>
          <Header hasBack={true} />
        </div>
        <div className={styles.Page_inner}>
          <div
            className={styles.circle_bg}
            style={{ left: 0, top: "-100px" }}
          ></div>
          <h1 className={styles.title}>
            Prove your social status with a permanent soulbound token stored on the chain.
            <img src="/fly.png" className={styles.fly} title="fly" />
          </h1>
          <h2 className={styles.subInfo}>
            <p className={styles.subInfoMain}>
              Based on ERC721-42
              <a
                href="https://github.com/"
                style={{ marginLeft: "10px" }}
              >
                (Github)
              </a>
            </p>

            <p>
              <img src="/heart.png" title="heart" className={styles.heart} />
              Create permanent soulbound tokens for your Bois. An non-transferable digital identity of your gang.
            </p>
            <p>
              <img src="/heart.png" title="heart" className={styles.heart} />
              Powered by web3 Multisig technology, no party can fake your token or pretend that you are in their league.
            </p>
            <p>
              <img src="/heart.png" title="heart" className={styles.heart} />
              Burn Authority is set before the mint on the consensus of both parties.
            </p>
            <div className={styles.socials}>
              <a
                href="https://twitter.com/"
                className={[styles.social, styles.twitter].join(" ")}
                target={"_blank"}
              >
                Twitter
              </a>
              <a
                href="https://discord.gg/"
                target={"_blank"}
                className={[styles.social, styles.discord].join(" ")}
              >
                Discord
              </a>
              <a
                href="https://opensea.io/"
                target={"_blank"}
                className={[styles.social, styles.discord].join(" ")}
              >
                OpenSea
              </a>
              <a
                href="https://github.com/"
                target={"_blank"}
                className={[styles.social, styles.github].join(" ")}
              >
                Github
              </a>
            </div>
          </h2>

          <img src="/flower.svg" className={styles.flower} title="flower" />
        </div>
      </div>
    </>
  ));
};
