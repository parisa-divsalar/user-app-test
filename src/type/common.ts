export type SelectOption = {
  name: string;
  value: string;
};

export type OnBoardingProps = {
  id: string;
  title: any;
  slideNumber: number;
  description: string;
  img: any;
};

export interface MenuListItemType {
  id: string;
  title: string;
  code: string;
  icon: any;
}

export interface ServicesType {
  id: string;
  title: string;
  href?: string;
  icon: string;
}

export type BannerProps = {
  id: string;
  bgBanner: any;
};

export interface FQAType {
  id: string | undefined;
  question: string;
  answer: string;
}

export interface ErrorsType {
  code: string;
  message: string;
}

export interface DateValueProps {
  year: string;
  month: string;
  day: string;
}
