import { Asset, useGetAllAssets } from "@/services/assets/get-all-assets.controller";
import { AssetBuyValue, useAssetsBuy } from "@/services/assets/get-assets-buy.controller";
import { assetBySell, useAssetsSell } from "@/services/assets/get-assets-sell.controller";
import {  useEffect, useState } from "react";

interface UseAddInvest{
    assetsData:Asset[]|undefined,
    assetId:string,
    setAssetId:React.Dispatch<React.SetStateAction<string>>,
    assetSell:assetBySell|undefined
    assetBuyValue:AssetBuyValue|undefined,
    setOrderType:React.Dispatch<React.SetStateAction<"buy" | "sell">>,
    orderType:'buy'|'sell'
}


export function useAddInvest(): UseAddInvest {
  const { data: allAssets } = useGetAllAssets();
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');

  const [assetId, setAssetId] = useState<string>('');
useEffect(() => {
  if (allAssets?.data?.body?.[0]?.asset_id) {
    setAssetId(allAssets.data.body[0].asset_id);
  }
}, [allAssets]);
  const isBuy = orderType === 'buy';
  const isSell = orderType === 'sell';

  const { data: assetBuyData } = useAssetsBuy(assetId, {
    enabled: !!assetId && isBuy,
  });

  const { data: assetBySell } = useAssetsSell(assetId, {
    enabled: !!assetId && isSell,
  });

  return {
    assetsData: allAssets?.data?.body,
    assetId,
    setAssetId,
    assetSell: assetBySell?.data?.body,
    assetBuyValue: assetBuyData?.data?.body,
    setOrderType,
    orderType,
  };
}
