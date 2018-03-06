    @Override
    public boolean validateSpecialBasket(CartModel cart, OrderEntryData orderEntryData) {

        boolean isSeasonalProduct = orderEntryData.getProduct().isIsSeasonal();

        /*
         *  Verify if product is seasonal. If it is, it will define the basket configuration
         *  to be the first  one found in  BasketConfiguration  table (since there is always
         *  only one). It defines the delivery mode as  'free' and the delivery date will be
         *  the one especified in  the category. Otherwise , if product is  non seasonal the
         *  basket configuration will be null and the delivery mode will be ordinary.
         */

        if( cart.getEntries().size() > 0 ){

            if( isSeasonalProduct ){
                if( cart.getBasketConfiguration() != null ){
                    return true;
                }else{
                    throw new LogistaMixProductsException(getLocalizedString(BASKET_PRODUCT_MIX_NOT_ALLOWED));
                }
            }else{
                if( cart.getBasketConfiguration() == null ){
                    return true;
                }else{
                    throw new LogistaMixProductsException(getLocalizedString(BASKET_PRODUCT_MIX_NOT_ALLOWED));
                }
            }

        }else{

            setDeliveryParameters( isSeasonalProduct,cart,orderEntryData );
            return true;

        }

    }

    private void setDeliveryParameters(boolean isSeasonal,CartModel cart, OrderEntryData orderEntryData){

        DeliveryModeModel deliveryModeModel;

        // Defines basket configuration based in isSeasonal of product
        cart.setBasketConfiguration( isSeasonal ?
                basketValidationService.getFirstBarketConfiguration() :
                null);

        // Define if free or extraordinary shipping should be used
        cart.setDeliveryMode( isSeasonal ?
                deliveryModeService.getDeliveryModeForCode("free") :
                deliveryModeService.getDeliveryModeForCode("extraordinary") );

        // Define the delivery adress of this cart
        cart.setDeliveryAddress( cart.getUser().getDefaultShipmentAddress() );

        ProductModel product = productService.getProductForCode( orderEntryData.getProduct().getCode() );
        if( isSeasonal && product != null &&
                product.getSupercategories() != null &&
                product.getSupercategories().size() > 0 ){

            // VER UMA FORMA DE BUSCAR A DATA NA SEASONAL CATEGORY :(

        }
    }