import { Stack } from '@mui/material';
import DevicesCard from '@/components/Card/Devices';
import { DeviceData } from '@/pages/Menu/Security/Devices/data.ts';
import { DevicesType } from '@/type/devices.ts';

const Devices = () => {
  return (
    <Stack px={2}>
      {DeviceData.map((device: DevicesType) => (
        <DevicesCard devices={device} key={device.id} />
      ))}
    </Stack>
  );
};

export default Devices;
