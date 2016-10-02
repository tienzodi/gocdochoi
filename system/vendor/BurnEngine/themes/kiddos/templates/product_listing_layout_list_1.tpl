<div>
  <input class="product-id_<?php echo $product['product_id']; ?>" type="hidden" value=""/>
  <div class="product-thumb">
    <?php echo $thumb; ?>
    <div>
      <div class="caption">
        <?php echo $title; ?>
        <?php echo $description; ?>
        <?php echo $price; ?>
        <?php echo $tax; ?>
        <?php echo $rating; ?>
      </div>
      <?php if ($button_cart || $button_wishlist || $button_compare): ?>
      <div class="button-group">
        <?php echo $button_cart; ?>
        <?php echo $button_wishlist; ?>
        <?php echo $button_compare; ?>
      </div>
      <?php endif; ?>
      <?php echo $stock_status; ?>
    </div>
    <?php echo $label_sale; ?>
    <?php echo $label_new; ?>
  </div>
</div>