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
<tr><td>Blip.tv</td><td>Y*</td></tr>
<tr><td>Viddler</td><td>Y*</td></tr>
<tr><td>Kickstarter</td><td> Y*</td></tr>
</table>

`*` means native support for these may be deprecated. If your video platform is not currently supported, try adding it via a `customSelector`...

## Add Your Own Video Vendor
Have a custom video player? We now have a `customSelector` option where you can add your own specific video vendor selector (_mileage may vary depending on vendor and fluidity of player_):

```javascript
  $("#thing-with-videos").fitVids({ customSelector: "iframe[src^='http://mycoolvideosite.com'], iframe[src^='http://myviiids.com']"});
  // Selectors are comma separated, just like CSS
```

_Note:_ This will be the quickest way to add your own custom vendor as well as test your player's compatibility with FitVids.

## Ignore With Class
Have a video you want FitVids to ignore? You can slap a class of `fitvidsignore` on your object or container and your video will be displayed as it is defined.

If you'd like to add a custom block to ignore FitVids, use the `ignore` option.

```javascript
  $("#thing-with-videos").fitVids({ ignore: '.mycooldiv, #myviiid'});
  // Selectors are comma separated, just like CSS
```

## Known issues

* Vimeo Autoplay API is not compatible with FitVids in IE11. You must manually wrap videos you want to autoplay.
