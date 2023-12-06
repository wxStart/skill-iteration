import { ConfigProvider, DatePicker } from 'antd';
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
const DocsPage = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div>
        <DatePicker></DatePicker>
        <p>This is umi docs.</p>
      </div>
    </ConfigProvider>
  );
};

export default DocsPage;
