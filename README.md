# Introducing FitVids.js
A lightweight, easy-to-use jQuery plugin for fluid width video embeds.

FitVids automates [the Intrinsic Ratio Method by Thierry Koblentz](http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/) to achieve fluid width videos in your responsive web design.

## How Do I Use It?
Include jQuery 1.7+ and FitVids.js in your layout and target your videos container with `fitVids()`.

```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/jquery.fitvids.js"></script>
<script>
  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#thing-with-videos").fitVids();
  });
</script>
```

This will wrap each video in a `div.fluid-width-video-wrapper` and apply the necessary CSS. After the initial Javascript call, it's all percentage-based CSS magic.

## Currently Supported Players
<table>
<tr><td>YouTube</td><td>Y</td></tr>
<tr><td>Vimeo</td><td>Y</td></tr>
<tr><td>Blip.tv</td><td>Y</td></tr>
<tr><td>Viddler</td><td>Y</td></tr>
</table>

## Add Your Own Video Vendor
Have a custom video player? We now have a `customSelector` option where you can add your own specific video vendor selector (_mileage may vary depending on vendor and fluidity of player_):

```javascript
  $("#thing-with-videos").fitVids({ customSelector: "iframe[src^='http://mysite.com'], iframe[src^='http://www.mysite.com']"});
  // Selectors are comma separated, just like CSS
```

_Note:_ This will be the quickest way to add your own custom vendor as well as test your player's compatibility with FitVids.

## Add Your Own Selectors

```javascript
  // As FitVids does not support object due to compatability issues with other video players. This will wrap object
  $("#thing-with-videos").fitVids({ customSelector: "object"});
  // FitVids will only wrap object code if it has the class `.fit-vids-allow`
  $("#thing-with-videos").fitVids({ customSelector: "object[class*='fit-vids-allow']"});
   // FitVids will n not wrap object code if it has the class `.fit-vids-ignore`
  $("#thing-with-videos").fitVids({ customSelector: "object:not('.fit-vids-ignore')"}); 
```

_Note:_ This will be the quickest way to add your own selector as well as test your player's compatibility with FitVids.

## Using in WordPress

If you are using FitVids on WordPress then replace $ with jQuery

## Changelog
* _09.02.11 - v1 - 2.376kb_
  * Added `customSelector` option
* _09.02.11 - v1 - 2.135kb_
	* Initial release
	* Vimeo,YouTube, Blip.tv, Viddler, Kickstarter

## Credits
@ChrisCoyier, @davatron5000, @TrentWalton, @raygunray
