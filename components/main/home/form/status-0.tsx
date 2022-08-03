import { ethers } from "ethers"
import type { RadioChangeEvent, DatePickerProps } from 'antd';
import {
  Button,
  DatePicker,
  Space,
  Dropdown,
  Form,
  Input,
  Menu,
  message,
  Radio,
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
import { useEffect, useState } from "react";
import { messages } from "../../../../locale/en";
import { WalletStore } from "../../../../stores/main/wallet.store";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { SolpassStore } from "../../../../stores/main/solpass.store";

import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import moment from "moment";




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
  //radio value controller
  const [burnAuthValue, setBurnAuthValue] = useState(0);
  const [expHidden, setExpHidden] = useState(1);
  const [expDate, setExpDate] = useState<Date>(null);
  const [uploadCheck, setUploadCheck] = useState(false);

  const expRadioOnChange = (e: RadioChangeEvent) => {
    if (e.target.value === 1) {
      solpassStore.info.expirationDate = null;
    }
    else {
      solpassStore.info.expirationDate = expDate;
    }
    console.log('radio sol', solpassStore.info.expirationDate);
    setExpHidden(e.target.value);
  };

  const dateOnChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
    let realDate = null;
    if (date !== null) {
      realDate = date.toDate();
      setExpDate(realDate);
    }
    solpassStore.info.expirationDate = realDate;
    console.log('realDate', realDate);
    console.log('sol expiration', solpassStore.info.expirationDate);
  };

  const burnAuthRadioOnChange = (e: RadioChangeEvent) => {
    solpassStore.info.burnAuth = e.target.value;
    setBurnAuthValue(e.target.value);
    console.log('burn sol', solpassStore.info.burnAuth);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      setUploadCheck(false);
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      setUploadCheck(false);
      return false;
    }
    setUploadCheck(true);
    return false;
  };

  const uploadToIPFS = async (event) => {
    if (uploadCheck === false) {
      console.log('invalid file');
      return;
    }
    console.log('Upload initiated')
    const file = event.file
    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file)
        console.log(result)
        solpassStore.info.cover = result.path
        setImageUrl(`https://ipfs.infura.io/ipfs/${result.path}`)
        console.log('sol expiration', solpassStore.info.expirationDate);
        console.log('sol burnAuth', solpassStore.info.burnAuth);
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
      <Form.Item label='Your Name'>
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

      <Form.Item label='Solpass Name'>
        <Input
          placeholder='Name your pass'
          value={solpassStore.info.nftName}
          style={{ width: "calc(100% - 120px)" }}
          onChange={(e) => {
            solpassStore.info.nftName = e.target.value;
          }}
        />
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
      <Form.Item label='Expiration Date'>
        <Radio.Group onChange={expRadioOnChange} value={expHidden} >
          <Radio value={0}>
            <DatePicker onChange={dateOnChange} disabledDate={(current) => {
              return moment().add(-1, 'days') >= current;
            }} disabled={expHidden === 1} />
          </Radio>
          <Radio value={1}>Never Expires</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label={
          <span>
            Select Who Can Burn The Pass
            <Tooltip
              title="The selected burn authorization will be shown to pass receiver before they sign on it."
            >
              <QuestionCircleOutlined style={{ marginLeft: "5px" }} />
            </Tooltip>
          </span>
        }>
        <Radio.Group onChange={burnAuthRadioOnChange} value={burnAuthValue}>
          <Radio value={0}>Issuer Only</Radio>
          <Radio value={1}>Receiver Only</Radio>
          <Radio value={2}>Both Parties</Radio>
          <Radio value={3}>Neither Parties</Radio>
        </Radio.Group>
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