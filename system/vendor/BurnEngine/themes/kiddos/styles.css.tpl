<?php
$main_50 = 'rgba(' . TB_Utils::hex2rgb($tbData->colors['main']['accent']['color'], true)    . ', 0.6)';
$sec_50  = 'rgba(' . TB_Utils::hex2rgb($tbData->colors['main']['secondary']['color'], true) . ', 0.4)';
?>

/*  -----------------------------------------------------------------------------------------
    C O M P O N E N T S
-----------------------------------------------------------------------------------------  */

.dropdown-menu {
  border-radius: 5px;
}
.tb_category_info_col {
  border: none !important;
}
.price-old:before {
  transform: rotate(-13deg);
}
.tb_listing_options.tb_style_plain {
  border-radius: 8px;
}

/*  -----------------------------------------------------------------------------------------
    H E A D E R
-----------------------------------------------------------------------------------------  */

#sticky_header {
  -webkit-box-shadow:
    0 1px 0 rgba(0, 0, 0, 0.05),
    0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow:
    0 1px 0 rgba(0, 0, 0, 0.05),
    0 0 10px rgba(0, 0, 0, 0.1);
}
.tbSticky .tbStickyRow .tbMainNavigation + .tbMainNavigation {
  <?php if ($lang_dir == 'ltr'): ?>
  margin-left: 20px;
  <?php else: ?>
  margin-right: 20px;
  <?php endif; ?>
}
.tbMainNavigationBar,
.tb_listing_options.tb_style_plain:not(.tb_pt_0):not(.tb_pb_0):not(.tb_pl_0),
.tb_listing_options.tb_style_plain:not(.tb_pt_0):not(.tb_pb_0):not(.tb_pl_0) > *
{
  position: relative;
}
.tbMainNavigationBar:before,
.tb_listing_options.tb_style_plain:not(.tb_pt_0):not(.tb_pb_0):not(.tb_pl_0):before
{
  content: '';
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  display: block;
  background-image:
          -webkit-linear-gradient( right, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 50%),
          -webkit-linear-gradient(bottom, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 50%),
          -webkit-linear-gradient( right, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 50%),
          -webkit-linear-gradient(bottom, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 50%);
  background-image:
          linear-gradient(      to right, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 50%),
          linear-gradient(     to bottom, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 50%),
          linear-gradient(      to right, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 50%),
          linear-gradient(     to bottom, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 50%);
  background-size: 16px 1px, 1px 16px, 16px 1px, 1px 16px;
  background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;
  background-position: 0 0, 100% 0, 0 100%, 0 0;
  border-radius: 5px;
}
.tb_listing_options.tb_style_plain:not(.tb_pt_0):not(.tb_pb_0):not(.tb_pl_0):before
{
  background-image:
          -webkit-linear-gradient( right, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0) 50%),
          -webkit-linear-gradient(bottom, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0) 50%),
          -webkit-linear-gradient( right, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0) 50%),
          -webkit-linear-gradient(bottom, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0) 50%);
  background-image:
          linear-gradient(      to right, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0) 50%),
          linear-gradient(     to bottom, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0) 50%),
          linear-gradient(      to right, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0) 50%),
          linear-gradient(     to bottom, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0) 50%);
}



#copy {
  font-size: 12px;
}

.dashed_main:not(.dashed_overlay),
.dashed_secondary:not(.dashed_overlay),
.dashed_dark:not(.dashed_overlay),
.dashed_darkest:not(.dashed_overlay),
.dashed_light:not(.dashed_overlay),
.dashed_main:after,
.dashed_secondary:after,
.dashed_dark:after,
.dashed_darkest:after,
.dashed_light:after
{
  background-size: 16px 1px, 1px 16px, 16px 1px, 1px 16px !important;
  background-repeat: repeat-x, repeat-y, repeat-x, repeat-y !important;
  background-position: 0 0, 100% 0, 0 100%, 0 0 !important;
}
.row-wrap.dashed_main,
.row-wrap.dashed_secondary,
.row-wrap.dashed_dark,
.row-wrap.dashed_darkest,
.row-wrap.dashed_light
{
  -webkit-background-origin: padding-box !important;
          background-origin: padding-box !important;
}
.row-wrap.dashed_overlay,
.row-wrap.dashed_overlay > .row
{
  position: relative;
  z-index: 1;
}
.dashed_overlay:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
}
.tb_widget_banner.dashed_overlay:after {
  z-index: 2;
}
.dashed_main:not(.dashed_overlay),
.dashed_main:after
{
  background-image:
          -webkit-linear-gradient( right, <?php echo $main_50; ?> 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, <?php echo $main_50; ?> 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient( right, <?php echo $main_50; ?> 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, <?php echo $main_50; ?> 50%, rgba(0,0,0,0) 50%) !important;
  background-image:
          linear-gradient(      to right, <?php echo $main_50; ?> 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, <?php echo $main_50; ?> 50%, rgba(0,0,0,0) 50%),
          linear-gradient(      to right, <?php echo $main_50; ?> 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, <?php echo $main_50; ?> 50%, rgba(0,0,0,0) 50%) !important;
}
.dashed_secondary:not(.dashed_overlay),
.dashed_secondary:after
{
  background-image:
          -webkit-linear-gradient( right, <?php echo $sec_50; ?> 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, <?php echo $sec_50; ?> 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient( right, <?php echo $sec_50; ?> 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, <?php echo $sec_50; ?> 50%, rgba(0,0,0,0) 50%) !important;
  background-image:
          linear-gradient(      to right, <?php echo $sec_50; ?> 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, <?php echo $sec_50; ?> 50%, rgba(0,0,0,0) 50%),
          linear-gradient(      to right, <?php echo $sec_50; ?> 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, <?php echo $sec_50; ?> 50%, rgba(0,0,0,0) 50%) !important;
}
.dashed_darkest:not(.dashed_overlay),
.dashed_darkest:after
{
  background-image:
          -webkit-linear-gradient( right, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient( right, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 50%) !important;
  background-image:
          linear-gradient(      to right, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 50%),
          linear-gradient(      to right, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 50%) !important;
}
.dashed_dark:not(.dashed_overlay),
.dashed_dark:after
{
  background-image:
          -webkit-linear-gradient( right, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient( right, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 50%) !important;
  background-image:
          linear-gradient(      to right, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 50%),
          linear-gradient(      to right, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 50%) !important;
}
.dashed_light:not(.dashed_overlay),
.dashed_light:after
{
  background-image:
          -webkit-linear-gradient( right, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient( right, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 50%),
          -webkit-linear-gradient(bottom, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 50%) !important;
  background-image:
          linear-gradient(      to right, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 50%),
          linear-gradient(      to right, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 50%),
          linear-gradient(     to bottom, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 50%) !important;
}
.dashed_1px_md:not(.dashed_overlay), .dashed_1px_md:after { background-size: 20px 1px, 1px 20px, 20px 1px, 1px 20px !important; }
.dashed_2px_md:not(.dashed_overlay), .dashed_2px_md:after { background-size: 20px 2px, 2px 20px, 20px 2px, 2px 20px !important; }
.dashed_3px_md:not(.dashed_overlay), .dashed_3px_md:after { background-size: 20px 3px, 3px 20px, 20px 3px, 3px 20px !important; }
.dashed_1px_lg:not(.dashed_overlay), .dashed_1px_lg:after { background-size: 24px 1px, 1px 24px, 24px 1px, 1px 24px !important; }
.dashed_2px_lg:not(.dashed_overlay), .dashed_2px_lg:after { background-size: 24px 2px, 2px 24px, 24px 2px, 2px 24px !important; }
.dashed_3px_lg:not(.dashed_overlay), .dashed_3px_lg:after { background-size: 24px 3px, 3px 24px, 24px 3px, 3px 24px !important; }
.dashed_offset_5px:after  { top:  5px; right:  5px; bottom:  5px; left:  5px; border-radius: 5px; }
.dashed_offset_10px:after { top: 10px; right: 10px; bottom: 10px; left: 10px; border-radius: 8px; }

/*  -----------------------------------------------------------------------------------------
    D E C O R A T I O N
-----------------------------------------------------------------------------------------  */

body {
  direction: ltr;
}
[dir="rtl"] #wrapper {
  direction: rtl;
}
#decoration_scene_top {
  overflow: hidden;
}
#decoration_scene_top,
.tb_dec__layer,
.tb_dec__layer *
{
  position: absolute;
  display: block;
}
#decoration_scene_top,
.tb_dec__layer
{
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
}
#decoration_scene_top svg {
  position: static;
}
.tb_dec__cloud1 {
  width: 170px;
  height: 100px;
}
.tb_dec__cloud2 {
  width: 112px;
  height: 57px;
}
.tb_dec__cloud3 {
  width: 85px;
  height: 53px;
}
.tb_dec__plane,
.tb_dec__plane .tb_dec__part1
{
  width: 92px;
  height: 60px;
}
.tb_dec__plane .tb_dec__part1 {
  position: static;
  top: 0;
  left: 0;
}
.tb_dec__plane .tb_dec__part2 {
  top: 0;
  right: 0;
  width: 6px;
  height: 60px;
  animation: fin_rotate linear 0.2s;
  animation-iteration-count: infinite;
}
.tb_dec__flipped {
  transform: rotateY(180deg);
}

/*** Positions ***/

.tb_dec__pos1 {
  top: 190px;
  left: -180px;
  animation: move_left_to_right linear 120s;
  animation-iteration-count: infinite;
}
.tb_dec__pos2 {
  top: -50px;
  left: -180px;
  animation: move_left_to_right linear 240s;
  animation-iteration-count: infinite;
  animation-delay: 20s;
}
.tb_dec__pos4 {
  top: 90px;
  left: -160px;
  animation: move_left_to_right linear 180s;
  animation-iteration-count: infinite;
  animation-delay: 30s;
}
.tb_dec__pos3 {
  top: 220px;
  left: -160px;
  animation: plane_move linear 90s;
  animation-iteration-count: infinite;
  animation-delay: 10s;
}
.tb_dec__pos5 {
  top: 15px;
  left: -160px;
  animation: plane_move linear 90s;
  animation-iteration-count: infinite;
  animation-delay: 10s;
}
.tb_dec__reverse {
  animation-direction: reverse;
}

/*** Animations ***/

#decoration_scene_top ~ section,
#decoration_scene_top ~ #wrapper
{
  position: relative;
}

@media (max-width: <?php echo ($screen_sm - 1) . 'px'; ?>) {
  #decoration_scene_top {
    display: none;
  }
  #decoration_scene_top * {
    -webkit-animation: none !important;
            animation: none !important;
  }
}
