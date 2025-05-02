import { Asset, useGetAllAssets } from '@/services/assets/get-all-assets.controller';
import { AssetBuyValue, useAssetsBuy } from '@/services/assets/get-assets-buy.controller';
import { assetBySell, useAssetsSell } from '@/services/assets/get-assets-sell.controller';
import { useGetOrderById } from '@/services/orders/get-order-by-id.controller';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface UseAddInvest {
  assetsData: Asset[] | undefined;
  assetId: string;
  setAssetId: React.Dispatch<React.SetStateAction<string>>;
  assetSell: assetBySell | undefined;
  assetBuyValue: AssetBuyValue | undefined;
  setOrderType: React.Dispatch<React.SetStateAction<'buy' | 'sell'>>;
  orderType: 'buy' | 'sell';
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
}

export function useAddInvest(): UseAddInvest {
  const { data: allAssets } = useGetAllAssets();
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState<string>('');
  const [assetId, setAssetId] = useState<string>('');
  useEffect(() => {
    if (allAssets?.data?.body?.[0]?.asset_id) {
      setAssetId(allAssets.data.body[0].asset_id);
    }
  }, [allAssets]);

  const { search, hash } = useLocation();
  const cleanStr = search.startsWith('?') ? search.slice(1) : search;
  const { data: orderById } = useGetOrderById(cleanStr);
  const { body } = { ...orderById?.data };

  const isEdit = location.hash === '#edit';

  useEffect(() => {
    if (isEdit && body) {
      setOrderType(body.side);
      setAssetId(body.asset_id);
      setAmount(String(body.available_budget));
    }
  }, [hash, body]);

  const isBuy = orderType === 'buy';
  const isSell = orderType === 'sell';

  const { data: assetBuyData } = useAssetsBuy(assetId, {
    enabled: !!assetId && isBuy && !!!isEdit,
  });

  const { data: assetBySell } = useAssetsSell(assetId, {
    enabled: !!assetId && isSell && !!!isEdit,
  });

  return {
    assetsData: allAssets?.data?.body,
    assetId,
    setAssetId,
    assetSell: assetBySell?.data?.body,
    assetBuyValue: assetBuyData?.data?.body,
    setOrderType,
    orderType,
    amount,
    setAmount,
  };
}
