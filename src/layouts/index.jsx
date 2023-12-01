import React, { PureComponent } from 'react';
import { ConfigProvider } from 'antd';
import { withRouter, history } from 'umi';
import zhCN from 'antd/es/locale/zh_CN';
import { connect } from 'umi';

// @connect(({ app }) => ({ app }))
class BasicLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      locale: zhCN,
    };
  }

  render() {
    // console.log("layout rewrite ==============> :: " +this.props);
    console.log(this.props);

    return (
      <ConfigProvider locale={zhCN}>
        {this.props.children}
        {/*{this.props.app.guideType ? (*/}
        {/*  <FocusGuide type={this.props.app.guideType} close={this.closeGuide} />*/}
        {/*) : null}*/}
      </ConfigProvider>
    );
  }
}

export default BasicLayout;
