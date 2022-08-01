import { ethers } from "ethers"
import {
  Button,
  Collapse,
  Dropdown,
  Form,
  Input,
  Menu,
  message,
  Select,
  Space,
  Tooltip,
  Upload
} from "antd";
import {
  QuestionCircleOutlined,
  LockOutlined,
  DownOutlined,
  LoadingOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { useObserver } from "mobx-react";
import wallet from "../../../../contracts/wallet";
import styles from "./../../../../pages/home/home.module.less";
import useStore from "../../../../stores/useStore";
import { NFTStore } from "../../../../stores/main/nfts.store";
import { useEffect, useState } from "react";
import { messages } from "../../../../locale/en";
import { WalletStore } from "../../../../stores/main/wallet.store";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { SolpassStore } from "../../../../stores/main/solpass.store";

import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { MarryStore } from "../../../../stores/main/marry.store";




export const Status0 = (props: {}) => {

  const formItemLayout = {
    wrapperCol: { span: 24 },
  };
  const solpassStore = useStore(SolpassStore);
  const walletStore = useStore(WalletStore);
  const [submiting, setSubmiting] = useState(false);
  const client = ipfsHttpClient({ url: 'https://ipfs.infura.io:5001/api/v0' });

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return false;
  };

  const uploadToIPFS = async (event) => {
    console.log('Upload initiated')
    const file = event.file
    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file)
        console.log(result)
        solpassStore.info.cover = `https://ipfs.infura.io/ipfs/${result.path}`
        setImageUrl(`https://ipfs.infura.io/ipfs/${result.path}`)
      } catch (error) {
        console.log("ipfs image upload error: ", error)
      }
    }
  }

  const begin = async (e) => {
    e.preventDefault();
    setSubmiting(true);
    try {
      await solpassStore.signA();
    } catch (e) {
      message.error(e.message);
    }

    setSubmiting(false);
  };
  const [ensList, setEnsList] = useState<ItemType[]>([]);
  useEffect(() => {
    (async () => {
      const walletInfo = await walletStore.getWalletInfo();
      const ens = walletInfo.ens;
      const bit = walletInfo.bit;
      const items = [];
      if (ens) {
        items.push({
          label: ens,
          key: ens,
        });
      }
      if (bit) {
        items.push({
          label: bit,
          key: bit,
        });
      }
      setEnsList(items);
    })();
  }, []);

  const menu = (
    <Menu
      onClick={(e) => {
        solpassStore.info.Aname = e.key;
      }}
      items={[
        {
          disabled: true,
          label:
            ensList.length > 0
              ? "please choose .eth or .bit"
              : "no .eth or .bit bind",
          key: -1,
        },
        ...ensList,
      ]}
    />
  );
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return useObserver(() => (
    <Form {...formItemLayout} layout={"vertical"} className={styles.mainForm}>
      <Form.Item
        label={
          <span>
            Solpass Cover
            <Tooltip
              title="Upload a cover for your Solpass"
            >
              <QuestionCircleOutlined style={{ marginLeft: "5px" }} />
            </Tooltip>
          </span>
        }
      >
        <Upload
          name="cover"
          listType="picture-card"
          className="cover-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={uploadToIPFS}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item label='your name'>
        <Input.Group
          compact
          style={{
            width: "100%",
          }}
        >
          <Input
            value={solpassStore.info.Aname}
            placeholder="will get your .eth/.bit name auto"
            onChange={async (e) => {
              solpassStore.info.Aname = e.target.value;
            }}
            style={{ width: "calc(100% - 120px)" }}
          />
          <Dropdown overlay={menu}>
            <Button style={{ width: "40px" }}>
              <DownOutlined />
            </Button>
          </Dropdown>
        </Input.Group>
      </Form.Item>

      <Form.Item label='Description'>
        <Input.TextArea
          placeholder='This pass is used for...'
          rows={5}
          value={solpassStore.info.Acomment}
          onChange={(e) => {
            solpassStore.info.Acomment = e.target.value;
          }}
        />
      </Form.Item>

      {solpassStore.info.Aaddress ? (
        <Button
          onClick={begin}
          disabled={!solpassStore.info.Aaddress}
          type="primary"
          loading={submiting}
          style={{ width: "100%" }}
          className="shake-little"
        >
          <LockOutlined style={{ marginRight: "10px" }} />
          Sign to get invite link
        </Button>
      ) : (
        <Button
          onClick={() => {
            wallet.connect();
          }}
          type="primary"
          loading={submiting}
          style={{ width: "100%" }}
        >
          Connect Wallet
        </Button>
      )}
    </Form>
  ));
};