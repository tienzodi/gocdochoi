<script>
tbApp.onScriptLoaded(function() {
  var page_url = window.location.href; 

  includeSvgResource("system/vendor/BurnEngine/themes/kiddos/images/decoration.svg", 3);

  $('body')
    .prepend('<div id="decoration_scene_top" data-limit-x="0">' + 
  			 '  <div class="tb_dec__layer"><span class="tb_dec__pos1"><span class="tb_dec__cloud1"><svg viewBox="0 0 165 102"><use xlink:href="' + page_url + '#tb_dec_cloud_1"></use></svg></span></div>' +
  			 '  <div class="tb_dec__layer"><span class="tb_dec__pos2"><span class="tb_dec__cloud1 tb_dec__flipped"><svg viewBox="0 0 165 102"><use xlink:href="' + page_url + '#tb_dec_cloud_1"></use></svg></span></span></div>' +
  			 '  <div class="tb_dec__layer"><span class="tb_dec__pos4 tb_dec__reverse"><span class="tb_dec__cloud3"><svg viewBox="0 0 85 53"><use xlink:href="' + page_url + '#tb_dec_cloud_3"></use></svg></span></div>' +
  			 '  <div class="tb_dec__layer"><span class="tb_dec__pos3"><span class="tb_dec__plane"><span class="tb_dec__part1"><svg viewBox="0 0 92 59"><use xlink:href="' + page_url + '#tb_dec_plane_body"></use></svg></span><span class="tb_dec__part2"><svg viewBox="0 0 6 60"><use xlink:href="' + page_url + '#tb_dec_plane_fin"></use></svg></span></span></span></div>' +
  			 '  <div class="tb_dec__layer"><span class="tb_dec__pos5 tb_dec__reverse"><span class="tb_dec__plane tb_dec__flipped"><span class="tb_dec__part1"><svg viewBox="0 0 92 59"><use xlink:href="' + page_url + '#tb_dec_plane_body"></use></svg></span><span class="tb_dec__part2"><svg viewBox="0 0 6 60"><use xlink:href="' + page_url + '#tb_dec_plane_fin"></use></svg></span></span></span></div>' +
             '</div>');

  var w = 0,
      h = 0;

  tbUtils.onSizeChange(function() {
    if (w != $(window).width()) {
      w = $(window).width();
      h = $(window).height();
      
      $('#decoration_animation').remove();
      $('head')
        .append('<style id="decoration_animation" type="text/css">' +
                '@keyframes move_left_to_right {' +
                '  0%   { transform: translate3d(0, 0, 0);      }' +
                '  100% { transform: translate3d(' + (w + 200) + 'px, 0, 0); }' +
                '}' +
                '@keyframes plane_move {' +
                '  0%   { transform: translate3d(0, 0, 0);    }' +
                '  40%  { transform: translate3d(' + (w + 200) + 'px, 0, 0); }' +
                '  100% { transform: translate3d(' + (w + 200) + 'px, 0, 0); }' +
                '}' +
                '@keyframes fin_rotate {' +
                '  0%   { transform: rotateX(0deg);    }' +
                '  100% { transform: rotateX(180deg);  }' +
                '}' +
                '</style>');
    }
  });
  
  tbApp.triggerResizeCallbacks();
});
</script>