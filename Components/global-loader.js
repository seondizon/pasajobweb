import { Spin, Icon } from 'antd';

const Loader = (props) => {
    const antIcon = <Icon type="loading" style={{ fontSize: 80, color : "#0575e6" }} spin />;
    return props.active? <div id="global-loader" ><Spin indicator={antIcon} /></div> : <></>
}

export default Loader