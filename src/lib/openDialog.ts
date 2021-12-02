import DialogTool from '../components/dialog/DialogTool.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const {title, content} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close=()=>{
    app.unmount('div')
    div.remove()
  }
  const app = createApp({
    render() {
      return h(DialogTool, {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if(newVisible===false){
              close()
            }
          }
        },
        {
          title,
          content
        });
    }
  })
    app.mount(div);
};