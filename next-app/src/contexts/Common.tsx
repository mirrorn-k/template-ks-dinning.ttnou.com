'use client';
import { createContext, useState, useEffect, ReactNode } from 'react';
import { tCompany } from '@ctypes/map';
import { tCatchcopy, tLink, tContentImg1 } from '@ctypes/index';
import { tContactFormItem, tMedia } from '@ctypes/map';
import { initCompanyInfo } from '@consts/default';

interface CommonDataContextProps {
  flgChange: (no?: number) => void;
  selectView: number;
  companyInfo: tCompany;
  imgTenpo: tMedia[];
  contactFormItems: tContactFormItem[];
  menus: tLink[];
  catchcopy: tCatchcopy | null;
  contents: tContentImg1[];
  sns: tLink[];
}

// デフォルト値を定義
const defaultValue: CommonDataContextProps = {
  flgChange: () => {},
  selectView: 0,
  companyInfo: initCompanyInfo,
  imgTenpo: [],
  contactFormItems: [],
  menus: [],
  catchcopy: null,
  contents: [],
  sns: [],
};

const maxSelectView = 1;

export const CommonDataContext =
  createContext<CommonDataContextProps>(defaultValue);

interface CommonDataProviderProps {
  domain: tCompany;
  imgTenpo: tMedia[];
  contactFormItems: CommonDataContextProps['contactFormItems'];
  menus: tLink[];
  catchcopy: tCatchcopy | null;
  contents: tContentImg1[];
  sns: tLink[];
  children: ReactNode;
}
export const CommonDataProvider = (props: CommonDataProviderProps) => {
  const [companyInfo, setCompanyInfo] =
    useState<CommonDataContextProps['companyInfo']>(initCompanyInfo);

  const [imgTenpo, setImgTenpo] = useState<CommonDataContextProps['imgTenpo']>(
    []
  );

  const [contactFormItems, setContactFormItems] = useState<
    CommonDataContextProps['contactFormItems']
  >([]);
  const [menus, setMenus] = useState<CommonDataContextProps['menus']>([]);
  const [catchcopy, setCatchcopy] =
    useState<CommonDataContextProps['catchcopy']>(null);
  const [contents, setContents] = useState<CommonDataContextProps['contents']>(
    []
  );

  useEffect(() => {
    setCompanyInfo(props.domain);
  }, [props.domain]);

  useEffect(() => {
    setImgTenpo(props.imgTenpo);
  }, [props.imgTenpo]);

  useEffect(() => {
    setContactFormItems(props.contactFormItems);
  }, [props.contactFormItems]);

  useEffect(() => {
    setMenus(props.menus);
  }, [props.menus]);

  useEffect(() => {
    setCatchcopy(props.catchcopy);
  }, [props.catchcopy]);

  useEffect(() => {
    setContents(props.contents);
  }, [props.contents]);

  const [selectView, setSelectView] = useState<number>(0);

  const flgChange = (no?: number) => {
    console.log(no);
    if (no !== undefined) {
      setSelectView(no);
      return;
    }
    setSelectView((prev) => {
      console.log(prev);
      if (prev === maxSelectView) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const [sns, setSns] = useState<CommonDataContextProps['sns']>([]);
  useEffect(() => {
    setSns(props.sns);
  }, [props.sns]);

  return (
    <CommonDataContext.Provider
      value={{
        flgChange,
        selectView,
        companyInfo,
        imgTenpo,
        contactFormItems,
        menus,
        catchcopy,
        contents,
        sns,
      }}
    >
      {props.children}
    </CommonDataContext.Provider>
  );
};
