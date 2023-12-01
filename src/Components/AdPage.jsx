import React, { Component } from 'react';
import Ad from './Ad';

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdVisible: true, // 초기 상태는 광고를 표시
    };
  }

  // 광고 표시/숨김을 토글하는 메서드
  handleToggleClick = () => {
    this.setState((prevState) => {
      const isAdVisible = !prevState.isAdVisible;
      console.log('isAdVisible:', isAdVisible); // 상태값을 콘솔에 출력
      return { isAdVisible };
    });
  };

  render() {
    return (
      <div>
        {this.state.isAdVisible && <Ad isVisible={true}/>}
        <button onClick={this.handleToggleClick}>
          {this.state.isAdVisible ? '광고 숨기기' : '광고 표시하기'}
        </button>
      </div>
    );
  }
}

export default AdPage;
