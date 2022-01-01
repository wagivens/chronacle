import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { IconPlus } from '../Icons/Icons';
import './SuggestedActivity.css';

@customElement('suggested-activity')
export class SuggestedActivity extends LitElement {
//   @property() public count = 0;

  static styles = css`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  
  .SuggestedActivity {
  padding: 10px;
  border: 1.5px dashed #667481;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  max-width: 500px;
  }
  
  .SuggestedActivity > *:not(:first-child) {
  margin-left: 20px;
  }
  
  .SuggestedActivity.ActivityName {
  padding: 0;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -4%;
  border: none;
  }
  
  .SuggestedActivity.ActivityImg {
  height: 100px;
  width: 100px;
  object-fit: cover;
  padding: 0;
  border: none;
  }
  
  .SuggestedActivity.AddBtn {
  font-size: 24px;
  background-color: #0074DF;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 5px;
  display: flex;
  justify-content: center;
  }
  
  .SuggestedActivity.AddBtn:hover {
  cursor: pointer;
  }
  `;

  render() {
    return html`
    <div class="SuggestedActivity">
      <img class="SuggestedActivity ActivityImg" 
      src="https://images.adsttc.com/media/images/57d8/b61d/e58e/ce3d/7c00/0035/large_jpg/Press_Kit_Images_34_View_at_dusk_WTC_Press_Kit.jpg?1473820183">
      <h2 class="SuggestedActivity ActivityName">One World Trade Center</h2>
      <button class="SuggestedActivity AddBtn">
        ${IconPlus()}
      </button>
    </div>
    `;
  }

}
