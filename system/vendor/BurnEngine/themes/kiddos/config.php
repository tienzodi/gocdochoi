<?php

return array(
    'oc_image_dimensions' => array(
        'thumb_width'       => 700,
        'thumb_height'      => 800,
        'popup_width'       => 1200,
        'popup_height'      => 1200,
        'additional_width'  => 70,
        'additional_height' => 70,
        'compare_width'     => 90,
        'compare_height'    => 90,
        'wishlist_width'    => 50,
        'wishlist_height'   => 50,
        'cart_width'        => 80,
        'cart_height'       => 80,
        'location_width'    => 250,
        'location_height'   => 50,
        'category_width'    => 150,
        'category_height'   => 150,
        'product_width'     => 400,
        'product_height'    => 400,
        'related_width'     => 80,
        'related_height'    => 80
    ),
    'row_style_vars' => array(
        'layout' => array(
            'margin_bottom'  => 40,
            'columns_gutter' => 40
        )
    ),
    'widget_title_style_vars' => array(
        'layout' => array(
            'margin_bottom' => 30
        )
    ),
    'additional_icons' => array(
        'Kids'     => 'fonts/kids'
    ),
    'colors' => array(
        'inherit_menu' => array(
            1 => array(
                'inherit_key' => 'theme:main.secondary'
            )
        ),
        'theme' => array(
            'main' => array(
                'secondary' => array(
                    'label'       => 'Secondary',
                    'elements'    => '
                        .tb_secondary_color,
                        .tb_hover_secondary_color:hover
                    ',
                    'property'      => 'color',
                    'color'         => '#e55d61',
                    'important'     => 1,
                    'force_print'   => 0,
                    'can_inherit'   => 0,
                    'inherit'       => 0,
                    'inherit_key'   => '',
                    'render_before' => 'text',
                ),
                'plain_1' => array(
                    'label'       => 'Plain wings',
                    'elements'    => '
                        #tb_dec_plane_body .part_1,
                        #tb_dec_plane_fin path
                    ',
                    'property'      => 'fill',
                    'color'         => '#e55d61',
                    'important'     => 1,
                    'force_print'   => 1,
                    'can_inherit'   => 1,
                    'inherit'       => 1,
                    'inherit_key'   => 'main.secondary'
                ),
                'plain_2' => array(
                    'label'       => 'Plain body',
                    'elements'    => '
                        #tb_dec_plane_body .part_2
                    ',
                    'property'      => 'fill',
                    'color'         => '#f9bfc2',
                    'important'     => 1,
                    'force_print'   => 0,
                    'can_inherit'   => 0,
                    'inherit'       => 0,
                    'inherit_key'   => '',
                ),
                'plain_3' => array(
                    'label'       => 'Plain windows',
                    'elements'    => '
                        #tb_dec_plane_body .part_3
                    ',
                    'property'      => 'fill',
                    'color'         => '#e55d61',
                    'important'     => 1,
                    'force_print'   => 1,
                    'can_inherit'   => 1,
                    'inherit'       => 1,
                    'inherit_key'   => 'main.accent'
                ),
            ),
        ),
        'area'  => array(
            'area_header' => array(
                'body' => array(
                    'secondary' => array(
                        'label'       => 'Secondary',
                        'elements'    => '
                            .tb_secondary_color,
                            .tb_hover_secondary_color:hover
                        ',
                        'property'      => 'color',
                        'color'         => '#e55d61',
                        'important'     => 1,
                        'force_print'   => 0,
                        'can_inherit'   => 1,
                        'inherit'       => 1,
                        'inherit_key'   => 'theme:main.secondary',
                        'render_before' => 'text',
                    ),
                )
            ),
            'area_intro' => array(
                'body' => array(
                    'secondary' => array(
                        'label'       => 'Secondary',
                        'elements'    => '
                            .tb_secondary_color,
                            .tb_hover_secondary_color:hover
                        ',
                        'property'      => 'color',
                        'color'         => '#e55d61',
                        'important'     => 1,
                        'force_print'   => 0,
                        'can_inherit'   => 1,
                        'inherit'       => 1,
                        'inherit_key'   => 'theme:main.secondary',
                        'render_before' => 'text',
                    ),
                )
            ),
            'area_content' => array(
                'body' => array(
                    'secondary' => array(
                        'label'       => 'Secondary',
                        'elements'    => '
                            .tb_secondary_color,
                            .tb_hover_secondary_color:hover
                        ',
                        'property'      => 'color',
                        'color'         => '#e55d61',
                        'important'     => 1,
                        'force_print'   => 0,
                        'can_inherit'   => 1,
                        'inherit'       => 1,
                        'inherit_key'   => 'theme:main.secondary',
                        'render_before' => 'text',
                    ),
                )
            ),
            'area_footer' => array(
                'body' => array(
                    'secondary' => array(
                        'label'       => 'Secondary',
                        'elements'    => '
                            .tb_secondary_color,
                            .tb_hover_secondary_color:hover
                        ',
                        'property'      => 'color',
                        'color'         => '#e55d61',
                        'important'     => 1,
                        'force_print'   => 0,
                        'can_inherit'   => 1,
                        'inherit'       => 1,
                        'inherit_key'   => 'theme:main.secondary',
                        'render_before' => 'text',
                    ),
                )
            )
        ),
        'row' => array(
            'body' => array(
                'secondary' => array(
                    'label'       => 'Secondary',
                    'elements'    => '
                            .tb_secondary_color,
                            .tb_hover_secondary_color:hover
                        ',
                    'property'      => 'color',
                    'color'         => '#e55d61',
                    'important'     => 1,
                    'force_print'   => 0,
                    'can_inherit'   => 1,
                    'inherit'       => 1,
                    'inherit_key'   => 'area:body.secondary',
                    'render_before' => 'text',
                ),
            )
        )
    ),
    'product_listing_layouts' => array(
        'grid' => array(
            0 => array(
                'name'     => 'Kiddos 1',
                'template' => 'product_listing_layout_grid_1',
                'disabled' => array(
                    'thumb_default'       => '1',
                    'description_default' => '1',
                    'cart_default'        => '1',
                    'rating_default'      => '1',
                    'thumb_hover'         => '0',
                    'description_hover'   => '0',
                    'cart_hover'          => '0',
                    'rating_hover'        => '0'
                )
            )
        ),
        'list' => array(
            0 => array(
                'name'     => 'Kiddos 1',
                'template' => 'product_listing_layout_list_1',
                'disabled' => array('elements_hover_action')
            )
        ),
        'compact' => array(
            0 => array(
                'name'     => 'Kiddos 1',
                'template' => 'product_listing_layout_compact_1',
                'disabled' => array('elements_hover_action')
            )
        )
    ),
    'form_control_height'  => 2,
    'copyright' => '&copy; Copyright 2015-' . date('Y') . '. Powered by <a href="http://www.opencart.com">Open Cart</a>.</span> <br /> <a class="tb_main_color" href="http://demo.themeburn.com/kiddos/">Kiddos theme</a> made by <a href="http://www.themeburn.com">ThemeBurn.com</a>'
);