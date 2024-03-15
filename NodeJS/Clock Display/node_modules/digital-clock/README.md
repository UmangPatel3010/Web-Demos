# Digital Clock

USE THIS AWESOME DIGITAL CLOCK FOR YOUR WEBSITE THAT CHANGE DEPENDING ON WHAT TIME ZONE YOU/YOUR USER IS IN.

## Install

`npm i digital-clock`

### HTML
```html
<div class="digital-clock"></div> 
<script src="index.js" type="module"></script>
```
### CSS
```css
.digital-clock { 
    font-size: 3em; /*To change the size of the numbers*/
    max-width: 250px;  /*To change the widt of the clock*/
    text-align: center; 
    border: 2px solid black; /*To change the border around the clock*/
    border-radius: 20px; /*To change how round the edges are*/
    background-color: white; /*To change the background color of the clock*/
}
``` 
### Javascript
```javascript
import showTime from "./node_modules/digital-clock/index.js";
 
setInterval(showTime, 1000);
```