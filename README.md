# Corebiz SDK

O Corebiz sdk é um kit de desenvolvimento que facilita a construção de APPs e funcionalidades na plataforma vtex.

# Instalar
Insira no final da pagina antes do fechamento do body.
```html
<script type="text/javascript" src="corebiz.sdk.js"></script>
```
# Vtex APIs Docs

https://help.vtex.com/developer-docs/

# Sumário

### [Config](#markdown-header-corebizconfig)

Metodo de configuração inicial

### [Search](#markdown-header-corebizsearch)

Metodos de busca de produtos na loja

  * [Products](#markdown-header-searchproducts) - Busca de produtos
  * [Autocomplete](#markdown-header-searchautocomplete) - Busca de sugesões de busca
  * [Buscapagina](#markdown-header-searchbuscapagina) - Template de busca
  * [GoPageSearch](#markdown-header-searchgopagesearch) - Redirecionamento para a pagina de busca
  
### [CrossSelling](#markdown-header-corebizcrossselling)

Metodos de busca de produtos relacionados

  * [Quem viu também viu](#markdown-header-crossselling-qvtv)
  * [Quem viu também comprou](#markdown-header-crossselling-qvtc) 
  * [Quem comprou também comprou](#markdown-header-crossselling-qctc) 
  * [Acessórios](#markdown-header-crossselling-acessorios)
  * [Similares](#markdown-header-crossselling-similares)
  * [Sugestões](#markdown-header-crossselling-sugestoes)

### [Brands](#markdown-header-corebizbrands)

Mostra todos as marcas da loja

  * [List](#markdown-header-brandslist) - Lista todos as marcas da loja (Acesso privado)

### [Category](#markdown-header-corebizcategory)

Mostra todas as categorias da loja

  * [List](#markdown-header-categorylist) - Lista todas as categorias da loja
  * [Filters](#markdown-header-categoryfilters) - Lista todos filtros da categoria ou departamento
 
### [Products](#markdown-header-corebizproducts)

Metodos de infosmações do produto, sku, serviço, variações, compre junto etc

  * [Service](#markdown-header-productsservice) - Lista o serviço da sku
  * [BuyTogether](#markdown-header-productsbuytogether) - Mostra o compre junto do sku
  * [Sku](#markdown-header-productssku) - Mostra as dados do sku
  * [Product](#markdown-header-productsproduct) - Mostra as dados do produto
  * [Variations](#markdown-header-productsvariations) - Mostra os dados das variações do sku
  * [SimulationShipping](#markdown-header-productssimulationShipping) - Simulação do frete do sku
  * [WarnMe](#markdown-header-productswarnme) - Avise do sku
  * [SkuDetails](#markdown-header-productsskudetails) - Detalhes do sku
  * [PublishReviewComment](#markdown-header-productspublishreviewComment) - Save um comentario do sku
  * [UserReview](#markdown-header-productsuserreview) - Lista dos comentarios do sku
  
### [Profile](#markdown-header-corebizprofile)

Metodos de informações do usuario, endereço etc.

  * [GetProfileByEmail](#markdown-header-profilegetprofilebyemail) - Mostra os dados do usuario pelo email
  * [GetProfile](#markdown-header-profilegetprofile) - Mostra os dados do usuario logado
  * [IsUserLogged](#markdown-header-profileisuserlogged) - Verifica de o usuario está logado
  * [Postcode](#markdown-header-profilepostcode) - Mostra informações do endereço baseada no cep
  * [GetClientProfileData](#markdown-header-profilegetclientprofiledata) - Dados do usuario logado
  * [GetAddress](#markdown-header-profilegetaddress) - Mostra o endereço do usuario logado
  * [GetAddresses](#markdown-header-profilegetaddresses) - Mostra todos os endereço do usuario logado
  * [SaveAddress](#markdown-header-profilesaveaddress) - Salva o endereço do usuario 
  * [SaveProfile](#markdown-header-profilesaveprofile) - Salva os dados do usuario
  * [RemoveAddress](#markdown-header-profileremoveaddress) - Remove o endereço do usuario
  * [Loggout](#markdown-header-profileloggout) - Desloga o usuario

### [Order](#markdown-header-corebizorder)

Metodos de informações do pedido

  * [List](#markdown-header-orderlist) - Lista todos os pedidos do usuario
  * [OrderByIdOrEmail](#markdown-header-orderorderbyidoremail) - Lista o pedido pelo id ou email do usuario
  * [OMS](#markdown-header-orderoms) - Lista o pedido pelo id do pedido

### [Cart](#markdown-header-corebizcart)

Metodos de informações do carrinho

  * [List](#markdown-header-cartlist) - Lista todos os items do carrinho
  * [Remove](#markdown-header-cartremove) - Remove os item do carrinho
  * [Add](#markdown-header-cartadd) - Adiciona o item no carrinho
  * [Update](#markdown-header-cartupdate) - Atualiza o item no carrinho
  * [AddCoupon](#markdown-header-cartaddcoupon) - Adiciona um cupon no carrinho
  * [GetCouponActive](#markdown-header-getcouponactive) - Selecionar o cupom activo no carrinho
  * [DeleteCoupon](#markdown-header-cartdeletecoupon) - Remove o cupon do carrinho
  * [SimulationShipping](#markdown-header-cartsimulationshipping) - Simulação de frete do carrinho

### [OrderForm](#markdown-header-corebizorderform)

Metodos de informações do OrderForm

  * [List](#markdown-header-orderformlist) - Lista todos do orderform
  * [Clear](#markdown-header-orderformclear) - Limpa o orderform

### [Checkout](#markdown-header-corebizcheckout)

Metodos de informações do Checkout

  * [AddAttachmentsOpenTextField](#markdown-header-checkoutaddattachmentsopentextfield) - Adiciona a informação de anexo no checkout
  * [AddItemAttachment](#markdown-header-checkoutadditemattachment) - Adiciona a informação de anexo no item do carrinho
  * [SaveClientProfileData](#markdown-header-checkoutsaveclientprofiledata) - Salva os dados do cliente no DataLayer
  * [SaveShippingData](#markdown-header-checkoutsaveshippingData) - Salva os dados do endereço do cliente no DataLayer
  * [GetDeliveryShipping](#markdown-header-checkoutgetdeliveryshipping) - Lista as transportadoras
  * [ChooseDeliveryShipping](#markdown-header-checkoutchoosedeliveryshipping) - Escolhe a transportadora para a entrega
  * [GetAddressInformation](#markdown-header-checkoutgetaddressinformation) - Dado um endereço incompleto com postalCode e country, devolve um endereço completo, com cidade, estado, rua, e quaisquer outras informações disponíveis.
 
 
### [MasterData](#markdown-header-corebizmasterdata)

Metodos de acesso ao Masterdata

  * [Insert](#markdown-header-masterdatainsert) - Adiciona dados no MD
  * [Select](#markdown-header-masterdataselect) - Seleciona os dados do MD
  * [Update](#markdown-header-masterdataupdate) - Atualiza os dados do MD
  * [Delete](#markdown-header-masterdatadelete) - Remove o dados do MD
 
### [Newsletter](#markdown-header-corebiznewslatter)

Envio de email

  * [Send](#markdown-header-masterdatasend) - Envio de email

### [Vtex](#markdown-header-vtex)

Metodos padrões da loja

  * [Dataserver](#markdown-header-vtexdataserver) - Pega a data e hora do servidor da loja
 
### [Storage Browser](#markdown-header-vtex)

Quarda dados no Browser

  * [Storage](#markdown-header-storage) - Quarda dados no Browser

### [Upload](#markdown-header-upload)

Upload de arquivos

  * [Upload](#markdown-header-upload_1)
  

# Corebiz.Config
Metodo de configuração inicial

```javascript
corebiz.config({
    'DEBUG': true, // Mostras os debugs do sdk
    'store_url': 'http://store.com.br', // Endereço da loja (Não Obrigátorio)
    'namestore': 'corebiz', // Nome da loja (Obrigatorio)
    'headers': { // Headers para o Master Data
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json',
            }
});
```
# Corebiz.Search
Uso de metodos de busca da loja

https://documenter.getpostman.com/view/845/search-103/Hs43#2690e18f-8ff0-d43d-85c0-2a4ec18fef29

# Search.Products
Busca de produtos atravez de parametros

___
**Filters**
___


**Filter by full text**

ft={searchWord}
Ex.: - - ft=television

**Filter by category**

fq=C:/{a}/{b} - {a} and {b} are categoryIds
Ex: fq=C:/1000041/1000049/

**Filter by specification**

fq=specificationFilter_{a}:{b} - {a} is the specificationId, {b} = specification value
Ex.: To filter products where the color is Blue, find the specificationId for color, supose it's 123 then it will be like this fq=specificationFilter_123:Blue

**Filter by price range**

fq=P:[{a} TO {b}] - {a} is the minimum price "from" and {b} is the highest price "to" Ex.: fq=P:[0 TO 20] will search products between 0,00 and 20,00.

**Filter by collection**

fq=productClusterIds:{{productClusterId}} where productClusterId also know as collectionId

**More information about collections**
http://help.vtex.com/tutorial/criando-colecao-de-produtos/

**Filter by product Id**

fq=productId:{{productId}}

**Filter by referenceId**

fq=alternateIds_RefId:{{referenceId}}

**Filter by ean13**

fq=alternateIds_Ean:{{ean13}}
    
**Filter by availability at a specific sales channel**

fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}
{{sc}} is the desired sales channel
{{bool}} is true ou false, 1 or 0.

Ex.: seaching available products for the sales channel 4
fq=isAvailablePerSalesChannel_4:1


___
**Sorting**
___
**Price**

O=OrderByPriceDESC

O=OrderByPriceASC
    
**Top Selling Products**

O=OrderByTopSaleDESC

**Best Reviews**

O=OrderByReviewRateDESC

**Name**

O=OrderByNameASC

O=OrderByNameDESC

**Release Date**

O=OrderByReleaseDateDESC

**Best Discounts**

O=OrderByBestDiscountDESC


___
**Pagging**
___
**Start and end padding**

_from=1

_to=30


___
**RESUME**
___
fq=skuId:19&fq=skuId:20 - Multiplos skus

fq=C:/<id_category>/<id_category>/ - Products by Categorys

fq=B:<id_brand> - Products by Brands

fq=H:<id_colection> - Products by collections

fq=P:[0 TO 20] - Range price products between 0,00 and 20,00

fq=productId:<value> - Products by field

fq=specificationFilter_<id_campo_produto>:<value> - Products by filters

fq=0 - All Products

productNameContains={{searchString}} - Search products to autocomplete

**Exemplo**

```javascript
corebiz.search.products({
    'fq': 0,
    '_from': 0,
    '_to': 49
}, function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```

**Exemplo 2**

Multiplos skus

```javascript
corebiz.search.products({
    'fq': 'skuId:19&fq=skuId:20',
    '_from': 0,
    '_to': 49
}, function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```

**Resposta**
```javascript
[{  
   "productId":"11",
   "productName":"Produto de teste recorrência 2 - Produto de teste Recorrência 2",
   "brand":"Corebiz",
   "linkText":"produto-recorrencia2",
   "productReference":"20qweqweqweqaaaaa",
   "categoryId":"14",
   "clusterHighlights":{  

   },
   "categories":[  
      "/recorrencia/"
   ],
   "categoriesIds":[  
      "/14/"
   ],
   "link":"http://corebiz.vtexcommercestable.com.br/produto-recorrencia2/p",
   "description":"Produto de teste recorrência 2",
   "items":[  
      {  
         "itemId":"34",
         "name":"Produto de teste Recorrência 2",
         "nameComplete":"Produto de teste Recorrência 2",
         "complementName":"",
         "ean":"20qweqweqweqaaaaa",
         "measurementUnit":"un",
         "unitMultiplier":1,
         "images":[  
            {  
               "imageId":"156452",
               "imageLabel":"",
               "imageTag":"<img src=\"~/arquivos/ids/156452-#width#-#height#/download.png\" width=\"#width#\" height=\"#height#\" alt=\"download\" id=\"\" />",
               "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156452/download.png",
               "imageText":"download"
            }
         ],
         "attachments":[  
            {  
               "id":3,
               "name":"Recorrência",
               "required":false,
               "domainValues":"[{\"FieldName\":\"Periodo\",\"MaxCaracters\":\"250\",\"DomainValues\":\"1 dia, 1 semana, 2 semanas, 1 mês\"}]"
            }
         ],
         "sellers":[  
            {  
               "sellerId":"1",
               "sellerName":"corebiz",
               "addToCartLink":"https://corebiz.vtexcommercestable.com.br/checkout/cart/add?sku=34&qty=1&seller=1&sc=1&price=100&cv=7107ae94372047c76bf61ce78d1d744d_geral:467225D68C45B0DCBF4368FECA3DFB67&sc=1",
               "sellerDefault":true,
               "commertialOffer":{  
                  "DeliverySlaSamplesPerRegion":{  
                     "0":{  
                        "DeliverySlaPerTypes":[  

                        ],
                        "Region":null
                     },
                     "1":{  
                        "DeliverySlaPerTypes":[  
                           {  
                              "TypeName":"Retirada",
                              "Price":0,
                              "EstimatedTimeSpanToDelivery":"00:00:00"
                           },
                           {  
                              "TypeName":"Retirada na loja",
                              "Price":10,
                              "EstimatedTimeSpanToDelivery":"00:00:00"
                           },
                           {  
                              "TypeName":"Sedex",
                              "Price":5,
                              "EstimatedTimeSpanToDelivery":"00:00:00"
                           }
                        ],
                        "Region":{  
                           "IsPersisted":true,
                           "IsRemoved":false,
                           "Id":1,
                           "Name":"Vtex_SP",
                           "CountryCode":"BRA",
                           "ZipCode":"04548005",
                           "CultureInfoName":"pt-BR"
                        }
                     }
                  },
                  "Installments":[  
                     {  
                        "Value":1,
                        "InterestRate":0,
                        "TotalValuePlusInterestRate":1,
                        "NumberOfInstallments":1,
                        "PaymentSystemName":"Visa",
                        "PaymentSystemGroupName":"creditCardPaymentGroup",
                        "Name":"Visa à vista"
                     },
                     {  
                        "Value":1,
                        "InterestRate":0,
                        "TotalValuePlusInterestRate":1,
                        "NumberOfInstallments":1,
                        "PaymentSystemName":"Mastercard",
                        "PaymentSystemGroupName":"creditCardPaymentGroup",
                        "Name":"Mastercard à vista"
                     },
                     {  
                        "Value":1,
                        "InterestRate":0,
                        "TotalValuePlusInterestRate":1,
                        "NumberOfInstallments":1,
                        "PaymentSystemName":"Vale",
                        "PaymentSystemGroupName":"giftCardPaymentGroup",
                        "Name":"Vale à vista"
                     },
                     {  
                        "Value":1,
                        "InterestRate":0,
                        "TotalValuePlusInterestRate":1,
                        "NumberOfInstallments":1,
                        "PaymentSystemName":"Nome da Promissória",
                        "PaymentSystemGroupName":"custom201PaymentGroupPaymentGroup",
                        "Name":"Nome da Promissória à vista"
                     }
                  ],
                  "DiscountHighLight":[  

                  ],
                  "GiftSkuIds":[  

                  ],
                  "Teasers":[  

                  ],
                  "BuyTogether":[  

                  ],
                  "Price":1,
                  "ListPrice":1,
                  "PriceWithoutDiscount":1,
                  "RewardValue":0,
                  "PriceValidUntil":"2018-04-30T16:45:46.6292977Z",
                  "AvailableQuantity":1000000,
                  "Tax":0,
                  "DeliverySlaSamples":[  
                     {  
                        "DeliverySlaPerTypes":[  

                        ],
                        "Region":null
                     },
                     {  
                        "DeliverySlaPerTypes":[  
                           {  
                              "TypeName":"Retirada",
                              "Price":0,
                              "EstimatedTimeSpanToDelivery":"00:00:00"
                           },
                           {  
                              "TypeName":"Retirada na loja",
                              "Price":10,
                              "EstimatedTimeSpanToDelivery":"00:00:00"
                           },
                           {  
                              "TypeName":"Sedex",
                              "Price":5,
                              "EstimatedTimeSpanToDelivery":"00:00:00"
                           }
                        ],
                        "Region":{  
                           "IsPersisted":true,
                           "IsRemoved":false,
                           "Id":1,
                           "Name":"Vtex_SP",
                           "CountryCode":"BRA",
                           "ZipCode":"04548005",
                           "CultureInfoName":"pt-BR"
                        }
                     }
                  ],
                  "GetInfoErrorMessage":null,
                  "CacheVersionUsedToCallCheckout":"7107ae94372047c76bf61ce78d1d744d_geral:467225D68C45B0DCBF4368FECA3DFB67"
               }
            }
         ]
      }
   ]
},
...]
```

# Search.Autocomplete
Sugestões de produtos na hora da busca

**Exemplo**

```javascript

corebiz.search.autocomplete('Pocket', function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```

**Resposta**

```javascript
[  
   {  
      "items":[  

      ],
      "thumb":"",
      "thumbUrl":null,
      "name":"Pocket em Toy",
      "href":"http://corebiz.vtexcommercestable.com.br/toy/Pocket",
      "criteria":"£Pocket em Toy¢/toy/Pocket"
   },
   {  
      "items":[  
         {  
            "itemId":"21",
            "name":"Greg",
            "nameComplete":"Pocket Steven Universo Greg",
            "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156430-25-25/greg.jpg"
         },
         {  
            "itemId":"22",
            "name":"Connie",
            "nameComplete":"Pocket Steven Universo Connie",
            "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156431-25-25/connie.jpg"
         },
         {  
            "itemId":"23",
            "name":"Garnet",
            "nameComplete":"Pocket Steven Universo Garnet",
            "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156432-25-25/garnet.jpg"
         },
         {  
            "itemId":"24",
            "name":"Leon",
            "nameComplete":"Pocket Steven Universo Leon",
            "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156434-25-25/leon.jpg"
         },
         {  
            "itemId":"25",
            "name":"Rose",
            "nameComplete":"Pocket Steven Universo Rose",
            "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156435-25-25/rose.jpg"
         },
         {  
            "itemId":"26",
            "name":"Peridot",
            "nameComplete":"Pocket Steven Universo Peridot",
            "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156436-25-25/peridot.jpg"
         },
         {  
            "itemId":"27",
            "name":"Pérola",
            "nameComplete":"Pocket Steven Universo Pérola",
            "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156437-25-25/perola.jpg"
         },
         {  
            "itemId":"28",
            "name":"steven",
            "nameComplete":"Pocket Steven Universo steven",
            "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156439-25-25/1stevenuniverse.jpg"
         }
      ],
      "thumb":"<img src=\"http://corebiz.vteximg.com.br/arquivos/ids/156439-25-25/1stevenuniverse.jpg\" width=\"25\" height=\"25\" alt=\"steven\" id=\"\" />",
      "thumbUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156439-25-25/1stevenuniverse.jpg",
      "name":"pocket steven universo",
      "href":"http://corebiz.vtexcommercestable.com.br/pocket_steven_universo/p",
      "criteria":null
   }
]
```

# Search.Buscapagina
Pagina especial de template de busca

```javascript
corebiz.search.buscapagina({
    'sl': '1daabf0d-5f18-47a2-8b3f-709dc17dc522',
    'PS': 7,
    'cc': 7,
    'sm': 0,
    'PageNumber': 1,
    'fq': 'H:136'
}, function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```

**Resposta**

A resposta é um HTML

# Search.GoPageSearch
Redirecionamento para a pagina de busca

```javascript
var search_text = 'Console PS4';
corebiz.search.goPageSearch(search_text);
```

# Corebiz.CrossSelling
Metodos de busca de produtos relacionados

# CrossSelling.ProductSearchWhoSawAlsoSaw
Lista todos os produtos do Quem viu também viu

```javascript

var productId = 1033;

corebiz.crossSelling.productSearchWhoSawAlsoSaw(productId,function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**
Mesmo da corebiz.search.products

# CrossSelling.ProductSearchWhoSawAlsoBought
Lista todos os produtos do Quem viu também comprou

```javascript

var productId = 1033;

corebiz.crossSelling.productSearchWhoSawAlsoBought(productId,function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**
Mesmo da corebiz.search.products

# CrossSelling.ProductSearchWhoBoughtAlsoBought
Lista todos os produtos do Quem comprou também comprou

```javascript

var productId = 1033;

corebiz.crossSelling.productSearchWhoBoughtAlsoBought(productId,function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**
Mesmo da corebiz.search.products

# CrossSelling.ProductSearchAccessories
Lista todos os produtos Acessórios

```javascript

var productId = 1033;

corebiz.crossSelling.productSearchAccessories(productId,function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**
Mesmo da corebiz.search.products

# CrossSelling.ProductSearchSimilars
Lista todos os produtos Similares

```javascript

var productId = 1033;

corebiz.crossSelling.productSearchSimilars(productId,function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

# CrossSelling.ProductSearchSuggestions
Lista todos os produtos Sugestão

```javascript

var productId = 1033;

corebiz.crossSelling.productSearchSuggestions(productId,function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

**Resposta**
Mesmo da corebiz.search.products

# Corebiz.Brands
Mostra todos as marcas da loja
https://documenter.getpostman.com/view/845/catalogsystem-101/Hs44#76beff6b-22a4-00bd-08be-b5d8353719a9

# Brands.List
Lista todos as marcas da loja

```javascript
corebiz.brands.list(function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

**Resposta**

```javascript
[  
   {  
      "id":2000000,
      "name":"Marca Moda",
      "isActive":true
   },
   {  
      "id":2000001,
      "name":"Marca Eletrônicos",
      "isActive":true
   },
   {  
      "id":2000002,
      "name":"teste",
      "isActive":true
   },
   {  
      "id":2000003,
      "name":"Corebiz",
      "isActive":true
   },
   {  
      "id":2000004,
      "name":"FunKo",
      "isActive":true
   }
]
```

# Corebiz.Category
Mostra todos as categorias da loja
https://documenter.getpostman.com/view/845/catalogsystem-101/Hs44#76beff6b-22a4-00bd-08be-b5d8353719a9

# Category.List
Lista todos as categorias da loja

```javascript
corebiz.category.list(function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

**Resposta**

```javascript
[  
   {  
      "id":1,
      "name":"Testes e Integração (Departamento)",
      "hasChildren":false,
      "url":"http://corebiz.vtexcommercestable.com.br/testes-e-integracao--departamento-",
      "children":[  

      ]
   },
   {  
      "id":4,
      "name":"Moda",
      "hasChildren":false,
      "url":"http://corebiz.vtexcommercestable.com.br/moda",
      "children":[  
         {  
            "id":5,
            "name":"Vestuario",
            "hasChildren":false,
            "url":"http://corebiz.vtexcommercestable.com.br/moda/vestuario",
            "children":[  

            ]
         },
         {  
            "id":6,
            "name":"Celulares",
            "hasChildren":false,
            "url":"http://corebiz.vtexcommercestable.com.br/moda/celulares",
            "children":[  

            ]
         },
         {  
            "id":7,
            "name":"Acessorios",
            "hasChildren":false,
            "url":"http://corebiz.vtexcommercestable.com.br/moda/acessorios",
            "children":[  

            ]
         }
      ]
   },
   {  
      "id":8,
      "name":"Eletrônicos",
      "hasChildren":false,
      "url":"http://corebiz.vtexcommercestable.com.br/eletronicos",
      "children":[  

      ]
   },
   {  
      "id":10,
      "name":"Parceiros VTEX Store",
      "hasChildren":false,
      "url":"http://corebiz.vtexcommercestable.com.br/parceiros-vtex-store",
      "children":[  

      ]
   },
   {  
      "id":12,
      "name":"Toy",
      "hasChildren":false,
      "url":"http://corebiz.vtexcommercestable.com.br/toy",
      "children":[  
         {  
            "id":13,
            "name":"steven universo",
            "hasChildren":false,
            "url":"http://corebiz.vtexcommercestable.com.br/toy/steven-universo",
            "children":[  

            ]
         }
      ]
   },
   {  
      "id":14,
      "name":"recorrencia",
      "hasChildren":false,
      "url":"http://corebiz.vtexcommercestable.com.br/recorrencia",
      "children":[  

      ]
   }
]
```

# Category.Filters
Lista todos os filtros da categoria ou departamento

```javascript

var category = "moda";

corebiz.category.filters(category, function (response) {

    console.log(response);

}, function (err) {

    console.error(err);

});
```

**Resposta**

```javascript
{
"Departments": [
    {
        "Quantity": 30,
        "Name": "Moda",
        "Link": "/Moda"
    }
],
"Brands": [
    {
        "Quantity": 2,
        "Name": "Marca Moda",
        "Link": "/moda/Marca-Moda"
    },
    {
        "Quantity": 1,
        "Name": "Marca Eletrônicos",
        "Link": "/moda/Marca-Eletronicos"
    }
],
"SpecificationFilters": {
    "Exibe na vitrine": [
        {
            "Quantity": 1,
            "Name": "Não",
            "Link": "/moda/Não?map=c,specificationFilter_1029"
        },
        {
            "Quantity": 1,
            "Name": "Sim",
            "Link": "/moda/Sim?map=c,specificationFilter_1029"
        }
    ]
},
"CategoriesTrees": [
    {
        "Quantity": 3,
        "Name": "Moda",
        "Link": "/Moda",
        "Children": [
            {
                "Quantity": 2,
                "Name": "Vestuario",
                "Link": "/Moda/Vestuario",
                "Children": []
            },
            {
                "Quantity": 1,
                "Name": "Celulares",
                "Link": "/Moda/Celulares",
                "Children": []
            }
        ]
    }
]
}
```

# Corebiz.Products
Metodos de infosmações do produto, sku, serviço, variações, compre junto etc

# Products.Service
Lista o serviço da sku

```javascript
var skuId = 3;

corebiz.products.service(skuId, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```html
<p><a id="openService" onclick="OpenServiceGrid();" href="javascript:void(0);" title="Serviços Opcionais Disponíveis">Serviços Opcionais Disponíveis</a></p>
<div class="showHideService" style="display:block">
<p class="prazo">Embalagem para presente</p><p class="valorparcela">Por apenas R$0,42 a parcela</p><p class="valortotal">Valor Total: R$5,00</p><p><a class="botao_comprar_servico" title="Comprar com Serviços" href="https://corebiz.vtexcommercestable.com.br/checkout/cart/add?sku=3&qty=1&sel…d779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67&sc=1">Comprar com Serviços</a></p>
<p><a id="closeService" onclick="CloseServiceGrid();" href="javascript:void(0);" title="Fechar">Fechar</a></p>
</div>
```
# Products.BuyTogether 
Mostra o compre junto do sku

```javascript
var skuId = 3;

corebiz.products.buyTogether (skuId, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});

```
**Resposta**

```javascript
{  
   "url":"https://corebiz.vtexcommercestable.com.br/checkout/cart/add?sku=3&sku=19&qt…97a901a7e09572e8f34c43c1037f41_geral:467225D68C45B0DCBF4368FECA3DFB67&sc=1",
   "category":"http://corebiz.vtexcommercestable.com.br/moda",
   "total_price":"R$ 110,98",
   "installment":{  
      "number":"12x",
      "price":"R$ 9,24"
   },
   "skus":[  
      "3",
      "19"
   ],
   "items":[  
      {  
         "thumb":"http://corebiz.vteximg.com.br/arquivos/ids/155398-90-90/carexemplo.png",
         "title":"Produto Variação Cor e Tam SKU Variação Cor1 e Tam 1",
         "url":"http://corebiz.vtexcommercestable.com.br/produto-variacao-cor-e-tam/p"
      },
      {  
         "thumb":"http://corebiz.vteximg.com.br/arquivos/ids/155397-90-90/corebiz-vtex-store.jpg",
         "title":"Agência Corebiz Vermelho",
         "url":"http://corebiz.vtexcommercestable.com.br/corebiz/p"
      }
   ]
}
```

# Products.Sku 
Mostra as dados do sku

```javascript
var skuId = 3;

corebiz.products.sku (skuId, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});

```
**Resposta**

```javascript
[  
   {  
      "Id":3,
      "IdProduct":3,
      "Ean":"SKUVRCORTAM1",
      "Name":"Produto Variação Cor e Tam - SKU Variação Cor1 e Tam 1",
      "Price":109.99,
      "ListPrice":109.99,
      "BestInstallmentValue":9.16,
      "BestInstallmentNumber":12,
      "Availability":true,
      "AvailabilityMessage":"True",
      "Images":[  
         [  
            {  
               "IdArchive":"155398",
               "Name":"imgex",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
               "IsMain":true,
               "ArchiveTypeId":2
            },
            {  
               "IdArchive":"155398",
               "Name":"imgex",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/155398-55-55/carexemplo.png",
               "IsMain":true,
               "ArchiveTypeId":3
            },
            {  
               "IdArchive":"155398",
               "Name":"imgex",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/155398-65-65/carexemplo.png",
               "IsMain":true,
               "ArchiveTypeId":1
            },
            {  
               "IdArchive":"155398",
               "Name":"imgex",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/155398-1000-1000/carexemplo.png",
               "IsMain":true,
               "ArchiveTypeId":10
            },
            {  
               "IdArchive":"155398",
               "Name":"imgex",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/155398-90-90/carexemplo.png",
               "IsMain":true,
               "ArchiveTypeId":29
            },
            {  
               "IdArchive":"155398",
               "Name":"imgex",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/155398-130-130/carexemplo.png",
               "IsMain":true,
               "ArchiveTypeId":30
            }
         ],
         [  
            {  
               "IdArchive":"156406",
               "Name":"frontal",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/156406-292-292/corebiz-vtex-store.jpg",
               "IsMain":false,
               "ArchiveTypeId":2
            },
            {  
               "IdArchive":"156406",
               "Name":"frontal",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/156406-55-55/corebiz-vtex-store.jpg",
               "IsMain":false,
               "ArchiveTypeId":3
            },
            {  
               "IdArchive":"156406",
               "Name":"frontal",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/156406-65-65/corebiz-vtex-store.jpg",
               "IsMain":false,
               "ArchiveTypeId":1
            },
            {  
               "IdArchive":"156406",
               "Name":"frontal",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/156406-1000-1000/corebiz-vtex-store.jpg",
               "IsMain":false,
               "ArchiveTypeId":10
            },
            {  
               "IdArchive":"156406",
               "Name":"frontal",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/156406-90-90/corebiz-vtex-store.jpg",
               "IsMain":false,
               "ArchiveTypeId":29
            },
            {  
               "IdArchive":"156406",
               "Name":"frontal",
               "Path":"http://corebiz.vteximg.com.br/arquivos/ids/156406-130-130/corebiz-vtex-store.jpg",
               "IsMain":false,
               "ArchiveTypeId":30
            }
         ]
      ],
      "Reference":null,
      "HasExtendedWarranty":true,
      "HasExtendedWarrantyPage":false,
      "NotifyMe":true,
      "HasServiceAtProductPage":true,
      "HasServiceAtCartPage":true,
      "HasServiceAtServicePage":false,
      "RealHeight":10,
      "RealWidth":10,
      "RealLength":10,
      "RealWeightKg":50,
      "RewardValue":0,
      "DefaultSellerId":"1",
      "SkuSellersInformation":[  
         {  
            "IsDefaultSeller":true,
            "SellerId":"1",
            "Name":"corebiz",
            "LogoUrl":null,
            "ListPrice":109.99,
            "Price":109.99,
            "AvailableQuantity":1000000
         }
      ],
      "SalesChannel":"1"
   }
]
```
# Products.Product 
Mostra as dados do produto

```javascript
var productId = 12;
corebiz.products.product(productId, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
[  
   {  
      "productId":"12",
      "productName":"Produto de teste recorrência 3 - Produto de teste Recorrência 3",
      "brand":"Corebiz",
      "linkText":"produto-recorrencia3",
      "productReference":"10qweqweqweqqweqweqwe",
      "categoryId":"14",
      "clusterHighlights":{  

      },
      "categories":[  
         "/recorrencia/"
      ],
      "categoriesIds":[  
         "/14/"
      ],
      "link":"http://corebiz.vtexcommercestable.com.br/produto-recorrencia3/p",
      "description":"Produto de teste recorrência 3",
      "items":[  
         {  
            "itemId":"35",
            "name":"Produto de teste Recorrência 3",
            "nameComplete":"Produto de teste Recorrência 3",
            "complementName":"",
            "ean":"10qweqweqweqqweqweqwe",
            "measurementUnit":"un",
            "unitMultiplier":1,
            "images":[  
               {  
                  "imageId":"156453",
                  "imageLabel":"",
                  "imageTag":"<img src=\"~/arquivos/ids/156453-#width#-#height#/download.png\" width=\"#width#\" height=\"#height#\" alt=\"download\" id=\"\" />",
                  "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156453/download.png",
                  "imageText":"download"
               }
            ],
            "attachments":[  
               {  
                  "id":3,
                  "name":"Recorrência",
                  "required":false,
                  "domainValues":"[{\"FieldName\":\"Periodo\",\"MaxCaracters\":\"250\",\"DomainValues\":\"1 dia, 1 semana, 2 semanas, 1 mês\"}]"
               }
            ],
            "sellers":[  
               {  
                  "sellerId":"1",
                  "sellerName":"corebiz",
                  "addToCartLink":"https://corebiz.vtexcommercestable.com.br/checkout/cart/add?sku=35&qty=1&se…2745fe72602693bc27921a0c1398c9_geral:467225D68C45B0DCBF4368FECA3DFB67&sc=1",
                  "sellerDefault":true,
                  "commertialOffer":{  
                     "DeliverySlaSamplesPerRegion":{  
                        "0":{  
                           "DeliverySlaPerTypes":[  

                           ],
                           "Region":null
                        },
                        "1":{  
                           "DeliverySlaPerTypes":[  
                              {  
                                 "TypeName":"Retirada",
                                 "Price":0,
                                 "EstimatedTimeSpanToDelivery":"00:00:00"
                              },
                              {  
                                 "TypeName":"Retirada na loja",
                                 "Price":10,
                                 "EstimatedTimeSpanToDelivery":"00:00:00"
                              },
                              {  
                                 "TypeName":"Sedex",
                                 "Price":5,
                                 "EstimatedTimeSpanToDelivery":"00:00:00"
                              }
                           ],
                           "Region":{  
                              "IsPersisted":true,
                              "IsRemoved":false,
                              "Id":1,
                              "Name":"Vtex_SP",
                              "CountryCode":"BRA",
                              "ZipCode":"04548005",
                              "CultureInfoName":"pt-BR"
                           }
                        }
                     },
                     "Installments":[  
                        {  
                           "Value":1,
                           "InterestRate":0,
                           "TotalValuePlusInterestRate":1,
                           "NumberOfInstallments":1,
                           "PaymentSystemName":"Visa",
                           "PaymentSystemGroupName":"creditCardPaymentGroup",
                           "Name":"Visa à vista"
                        },
                        {  
                           "Value":1,
                           "InterestRate":0,
                           "TotalValuePlusInterestRate":1,
                           "NumberOfInstallments":1,
                           "PaymentSystemName":"Mastercard",
                           "PaymentSystemGroupName":"creditCardPaymentGroup",
                           "Name":"Mastercard à vista"
                        },
                        {  
                           "Value":1,
                           "InterestRate":0,
                           "TotalValuePlusInterestRate":1,
                           "NumberOfInstallments":1,
                           "PaymentSystemName":"Vale",
                           "PaymentSystemGroupName":"giftCardPaymentGroup",
                           "Name":"Vale à vista"
                        },
                        {  
                           "Value":1,
                           "InterestRate":0,
                           "TotalValuePlusInterestRate":1,
                           "NumberOfInstallments":1,
                           "PaymentSystemName":"Nome da Promissória",
                           "PaymentSystemGroupName":"custom201PaymentGroupPaymentGroup",
                           "Name":"Nome da Promissória à vista"
                        }
                     ],
                     "DiscountHighLight":[  

                     ],
                     "GiftSkuIds":[  

                     ],
                     "Teasers":[  

                     ],
                     "BuyTogether":[  

                     ],
                     "Price":1,
                     "ListPrice":1,
                     "PriceWithoutDiscount":1,
                     "RewardValue":0,
                     "PriceValidUntil":"2018-05-01T00:05:35.337067Z",
                     "AvailableQuantity":1000000,
                     "Tax":0,
                     "DeliverySlaSamples":[  
                        {  
                           "DeliverySlaPerTypes":[  

                           ],
                           "Region":null
                        },
                        {  
                           "DeliverySlaPerTypes":[  
                              {  
                                 "TypeName":"Retirada",
                                 "Price":0,
                                 "EstimatedTimeSpanToDelivery":"00:00:00"
                              },
                              {  
                                 "TypeName":"Retirada na loja",
                                 "Price":10,
                                 "EstimatedTimeSpanToDelivery":"00:00:00"
                              },
                              {  
                                 "TypeName":"Sedex",
                                 "Price":5,
                                 "EstimatedTimeSpanToDelivery":"00:00:00"
                              }
                           ],
                           "Region":{  
                              "IsPersisted":true,
                              "IsRemoved":false,
                              "Id":1,
                              "Name":"Vtex_SP",
                              "CountryCode":"BRA",
                              "ZipCode":"04548005",
                              "CultureInfoName":"pt-BR"
                           }
                        }
                     ],
                     "GetInfoErrorMessage":null,
                     "CacheVersionUsedToCallCheckout":"712745fe72602693bc27921a0c1398c9_geral:467225D68C45B0DCBF4368FECA3DFB67"
                  }
               }
            ]
         }
      ]
   }
]
```

# Products.Variations 
Mostra os dados das variações do sku

```javascript
var skuId = 3;

corebiz.products.variations(skuId, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "productId":3,
   "name":"Produto Variação Cor e Tam",
   "salesChannel":"1",
   "available":true,
   "displayMode":"especificacao",
   "dimensions":[  
      "Tamanho",
      "Cor"
   ],
   "dimensionsInputType":{  
      "Tamanho":"Radio",
      "Cor":"Radio"
   },
   "dimensionsMap":{  
      "Tamanho":[  
         "PP",
         "P",
         "M",
         "G",
         "GG"
      ],
      "Cor":[  
         "Azul",
         "Amarela"
      ]
   },
   "skus":[  
      {  
         "sku":3,
         "skuname":"SKU Variação Cor1 e Tam 1",
         "dimensions":{  
            "Tamanho":"PP",
            "Cor":"Amarela"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      },
      {  
         "sku":4,
         "skuname":"SKU Variação Cor1 e Tam 2",
         "dimensions":{  
            "Tamanho":"P",
            "Cor":"Amarela"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      },
      {  
         "sku":5,
         "skuname":"SKU Variação Cor1 e Tam 3",
         "dimensions":{  
            "Tamanho":"M",
            "Cor":"Amarela"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      },
      {  
         "sku":6,
         "skuname":"SKU Variação Cor1 e Tam 4",
         "dimensions":{  
            "Tamanho":"G",
            "Cor":"Amarela"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      },
      {  
         "sku":7,
         "skuname":"SKU Variação Cor1 e Tam 5",
         "dimensions":{  
            "Tamanho":"GG",
            "Cor":"Amarela"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      },
      {  
         "sku":8,
         "skuname":"SKU Variação Cor2 e Tam 1",
         "dimensions":{  
            "Tamanho":"PP",
            "Cor":"Azul"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      },
      {  
         "sku":9,
         "skuname":"SKU Variação Cor2 e Tam 2",
         "dimensions":{  
            "Tamanho":"P",
            "Cor":"Azul"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      },
      {  
         "sku":10,
         "skuname":"SKU Variação Cor2 e Tam 3",
         "dimensions":{  
            "Tamanho":"M",
            "Cor":"Azul"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      },
      {  
         "sku":11,
         "skuname":"SKU Variação Cor2 e Tam 4",
         "dimensions":{  
            "Tamanho":"G",
            "Cor":"Azul"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      },
      {  
         "sku":12,
         "skuname":"SKU Variação Cor2 e Tam 5",
         "dimensions":{  
            "Tamanho":"GG",
            "Cor":"Azul"
         },
         "available":true,
         "availablequantity":99999,
         "cacheVersionUsedToCallCheckout":"6ed779f11ae3f251594469c467e98994_geral:467225D68C45B0DCBF4368FECA3DFB67",
         "listPriceFormated":"R$ 0,00",
         "listPrice":0,
         "taxFormated":"R$ 0,00",
         "taxAsInt":0,
         "bestPriceFormated":"R$ 109,99",
         "bestPrice":10999,
         "installments":12,
         "installmentsValue":916,
         "installmentsInsterestRate":0,
         "image":"http://corebiz.vteximg.com.br/arquivos/ids/155398-292-292/carexemplo.png",
         "sellerId":"1",
         "seller":"corebiz",
         "measures":{  
            "cubicweight":0.5625,
            "height":15,
            "length":15,
            "weight":100,
            "width":15
         },
         "unitMultiplier":1,
         "rewardValue":0
      }
   ]
}
```

# Products.SimulationShipping  
Simulação do frete do sku

```javascript
var skuId = 3;
corebiz.products.simulationShipping({
    "items": [{
        "id": skuId,
        "quantity": 1,
        "seller": 1
    }],
    "postalCode": "06416070",
    "country": "BRA"
}, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
[
    {
        "itemIndex":0,
        "stockBalance":70,
        "quantity":1,
        "shipsTo":["BRA"],
        "slas":[  
            {  
                "id":"Sedex",
                "name":"Sedex",
                "deliveryIds":[  
                    {  
                        "courierId":"1",
                        "warehouseId":"1_1",
                        "dockId":"1",
                        "courierName":"Sedex",
                        "quantity":1
                    }
                ],
                "shippingEstimate":"3d",
                "shippingEstimateDate":null,
                "lockTTL":null,
                "availableDeliveryWindows":[  
                    {  
                        "startDateUtc":"2017-05-04T07:00:00+00:00",
                        "endDateUtc":"2017-05-04T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-05T07:00:00+00:00",
                        "endDateUtc":"2017-05-05T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-06T07:00:00+00:00",
                        "endDateUtc":"2017-05-06T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-07T07:00:00+00:00",
                        "endDateUtc":"2017-05-07T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-08T07:00:00+00:00",
                        "endDateUtc":"2017-05-08T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-09T07:00:00+00:00",
                        "endDateUtc":"2017-05-09T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-10T07:00:00+00:00",
                        "endDateUtc":"2017-05-10T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-11T07:00:00+00:00",
                        "endDateUtc":"2017-05-11T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-12T07:00:00+00:00",
                        "endDateUtc":"2017-05-12T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-13T07:00:00+00:00",
                        "endDateUtc":"2017-05-13T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-14T07:00:00+00:00",
                        "endDateUtc":"2017-05-14T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-15T07:00:00+00:00",
                        "endDateUtc":"2017-05-15T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-16T07:00:00+00:00",
                        "endDateUtc":"2017-05-16T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-17T07:00:00+00:00",
                        "endDateUtc":"2017-05-17T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-18T07:00:00+00:00",
                        "endDateUtc":"2017-05-18T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-19T07:00:00+00:00",
                        "endDateUtc":"2017-05-19T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-20T07:00:00+00:00",
                        "endDateUtc":"2017-05-20T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-21T07:00:00+00:00",
                        "endDateUtc":"2017-05-21T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-22T07:00:00+00:00",
                        "endDateUtc":"2017-05-22T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-23T07:00:00+00:00",
                        "endDateUtc":"2017-05-23T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-24T07:00:00+00:00",
                        "endDateUtc":"2017-05-24T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-25T07:00:00+00:00",
                        "endDateUtc":"2017-05-25T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-26T07:00:00+00:00",
                        "endDateUtc":"2017-05-26T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-27T07:00:00+00:00",
                        "endDateUtc":"2017-05-27T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-28T07:00:00+00:00",
                        "endDateUtc":"2017-05-28T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-29T07:00:00+00:00",
                        "endDateUtc":"2017-05-29T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-30T07:00:00+00:00",
                        "endDateUtc":"2017-05-30T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-05-31T07:00:00+00:00",
                        "endDateUtc":"2017-05-31T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    },
                    {  
                        "startDateUtc":"2017-06-01T07:00:00+00:00",
                        "endDateUtc":"2017-06-01T21:00:00+00:00",
                        "price":2000,
                        "lisPrice":2000,
                        "tax":0
                    }
                ],
                "deliveryWindow":null,
                "price":500,
                "listPrice":500,
                "tax":0,
                "pickupStoreInfo":null
            }
        ]
]
```

# Products.WarnMe  
Avise do sku

```javascript
var skuId = 3;

corebiz.products.warnMe({
    'notifymeClientName': 'Rafael',
    'notifymeClientEmail': 'rafael@sss.com',
    'notifymeIdSku': skuId
}, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**

Boolean

# Products.SkuDetails 
Detalhes do sku

```javascript
var skuId = 3;

corebiz.products.skuDetails(skuId, function (resp) {

    console.log(JSON.stringify(resp));

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "Id":21,
   "ProductId":8,
   "NameComplete":"Pocket Steven Universo Greg",
   "ProductName":"Pocket Steven Universo",
   "ProductDescription":"Pocket - Steven Universo\r\n\r\nSTEVEN UNIVERSO Acredite em Steven! Steven Universo é um herói metade humano metade Gem que está aprendendo a salvar o mundo com os poderes mágicos que vêm do seu umbigo. Steven pode até não ser tão poderoso quanto as Crystal Gems. Ou tão esperto. Mas isso não o impede de se unir a Garnet, Ametista e Pérola em suas aventuras mágicas – nas quais Steven sempre encontra uma forma surpreendente de salvar o dia.",
   "SkuName":"Greg",
   "IsActive":true,
   "IsTransported":true,
   "IsInventoried":true,
   "IsGiftCardRecharge":false,
   "ImageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156430-55-55/greg.jpg",
   "DetailUrl":"/pocket_steven_universo/p",
   "CSCIdentification":null,
   "BrandId":"2000004",
   "BrandName":"FunKo",
   "Dimension":{  
      "cubicweight":0.1667,
      "height":10,
      "length":10,
      "weight":10,
      "width":10
   },
   "RealDimension":{  
      "realCubicWeight":0,
      "realHeight":0,
      "realLength":0,
      "realWeight":0,
      "realWidth":0
   },
   "ManufacturerCode":"",
   "IsKit":false,
   "KitItems":[  

   ],
   "Services":[  

   ],
   "Categories":[  

   ],
   "Attachments":[  

   ],
   "Collections":[  

   ],
   "SkuSellers":[  
      {  
         "SellerId":"1",
         "StockKeepingUnitId":21,
         "SellerStockKeepingUnitId":"21",
         "IsActive":true,
         "FreightCommissionPercentage":0,
         "ProductCommissionPercentage":0
      }
   ],
   "SalesChannels":[  
      1
   ],
   "Images":[  
      {  
         "ImageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156430/greg.jpg",
         "ImageName":"frente",
         "FileId":156430
      }
   ],
   "SkuSpecifications":[  
      {  
         "FieldId":1026,
         "FieldName":"Personagem",
         "FieldValueIds":[  
            1079
         ],
         "FieldValues":[  
            "Greg"
         ]
      }
   ],
   "ProductSpecifications":[  
      {  
         "FieldId":1027,
         "FieldName":"tamanho",
         "FieldValueIds":[  

         ],
         "FieldValues":[  
            "Stands 3.75\" tall"
         ]
      }
   ],
   "ProductClustersIds":"135,137",
   "ProductCategoryIds":"/12/13/",
   "ProductGlobalCategoryId":1795,
   "ProductCategories":{  
      "12":"Toy",
      "13":"steven universo"
   },
   "CommercialConditionId":1,
   "RewardValue":0,
   "AlternateIds":{  
      "RefId":"greg123"
   },
   "AlternateIdValues":[  
      "greg123"
   ],
   "EstimatedDateArrival":null,
   "MeasurementUnit":"un",
   "UnitMultiplier":1,
   "InformationSource":"Indexer",
   "ModalType":null
}
```

# Products.PublishReviewComment
Save um comentario do sku

```javascript

corebiz.products.publishReviewComment({
    'userId': resp.userId,  // O userId precisa pegar dentro da resposta do UserReview
    'productId': skuJson_0.productId,
    'title': 'Meu titulo',
    'comment': 'Meu comentario 2',
    'ratingValue': 3,
    'categoryId': vtxctx.categoryId
}, function (response) {

    console.log(response)

}, function (error) {

    console.error(error);

});

```

# Products.UserReview
Lista dos comentarios do sku

```javascript

corebiz.products.userReview({
    'productId': skuJson_0.productId,
    'categoryId': vtxctx.categoryId,
    'productLinkId': $(".product-user-review-product-linkid").val(),
    'qtdReviewsToBeShown': 3,
}, function (resp) {

    console.log(resp);
    
}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "userId":"",
   "rating":"<strong id=\"spnRatingProdutoBottom\" class=\"rating-produto avaliacao30\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao50\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao50\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 0%\">\n                     </span>\n                     <span>nenhum voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao50\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao40\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao40\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 0%\">\n                     </span>\n                     <span>nenhum voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao40\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao30\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao30\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 100%\">\n                     </span>\n                     <span> 1 Voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao30\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao20\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao20\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 0%\">\n                     </span>\n                     <span>nenhum voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao20\">\n                 <li>\n                     <em class=\"voteRatingStar\">\n                         <strong class=\"rating-demonstrativo avaliacao10\">\n                     </strong></em><strong class=\"rating-demonstrativo avaliacao10\">\n                     <span class=\"voteRatingBar\">\n                         <span style=\"width: 0%\">\n                     </span>\n                     <span>nenhum voto</span>\n                 </span></strong></li><strong class=\"rating-demonstrativo avaliacao10\">\n             </strong></strong></strong></strong></strong></strong>",
   "media":"\n                 <strong id=\"spnRatingProdutoBottom\" class=\"rating-produto avaliacao30\">\n                 <span>\n1 voto\n</span>\n             </strong>",
   "comments":[  
      {  
         "author":"Rafael",
         "rating":"a30",
         "comment":"Meu comentario 2",
         "id":"24"
      }
   ]
}
```

# Corebiz.Profile
Metodos de informações do usuario, endereço etc.

# Profile.GetProfile
Mostra os dados do usuario logado

```javascript
corebiz.profile.getProfile(function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "UserId":"555c43ff-c97c-43a8-8bfc-2e76e2255cc0",
   "IsReturningUser":true,
   "IsUserDefined":true,
   "IsPJ":false,
   "FirstName":"Rafael",
   "LastName":"Cruzy1",
   "Gender":"M",
   "Email":"rafael.cruz@corebiz.com.br"
}
```

# Profile.GetProfileByEmail
Mostra os dados do usuario pelo email

```javascript
corebiz.profile.getProfileByEmail({'email':'name@corebiz.com.br'}, function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "userProfileId":"555c43ff-c97c-43a8-8bfc-2e76e2255cc0",
   "profileProvider":"corebiz",
   "availableAccounts":[  

   ],
   "availableAddresses":[  
      {  
         "addressType":"residential",
         "receiverName":"RAFAEL CRUZ",
         "addressId":"Minha Casa",
         "postalCode":"06416-075",
         "city":"BARUERI",
         "state":"SP",
         "country":"BRA",
         "street":"RUA Joao da Silva",
         "number":"10",
         "neighborhood":"VILA Silva",
         "complement":"",
         "reference":"",
         "geoCoordinates":[  

         ]
      },
      {  
         "addressType":"residential",
         "receiverName":"RAFAEL CRUZ",
         "addressId":"Minha Casa 3",
         "postalCode":"06416-070",
         "city":"BARUERI",
         "state":"SP",
         "country":"BRA",
         "street":"RUA MAJOR ÁLVARO FONTES",
         "number":"54244",
         "neighborhood":"VILA ENGENHO NOVO 1",
         "complement":"",
         "reference":"",
         "geoCoordinates":[  

         ]
      }
   ],
   "userProfile":{  
      "attachmentId":"clientProfileData",
      "email":"rafael.cruz@corebiz.com.br",
      "firstName":"Rafael",
      "lastName":"Cruzy1",
      "document":"12345678909",
      "documentType":"cpf",
      "phone":"11952542354",
      "corporateName":null,
      "tradeName":null,
      "corporateDocument":null,
      "stateInscription":null,
      "corporatePhone":null,
      "isCorporate":false,
      "profileCompleteOnLoading":null,
      "profileErrorOnLoading":null,
      "customerClass":null
   }
}
```

# Profile.IsUserLogged
Verifica de o usuario está logado

```javascript
corebiz.profile.isUserLogged(function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

Boolean

# Profile.Postcode
Mostra informações do endereço baseada no cep

```javascript
corebiz.profile.postcode('06416050', function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});

```
**Resposta**

```javascript
{  
   "City":"Barueri",
   "Complement":"",
   "Country":{  
      "Id":"BRA",
      "Name":"Brazil",
      "SpecificData":{  
         "NationalAddressDirectoryLocalityKey":"00008956",
         "NationalAddressDirectoryLocality":"Barueri",
         "NationalAddressDirectoryNeighborhoodStartKey":"00015425",
         "NationalAddressDirectoryNeighborhoodEndKey":"00000000",
         "NationalAddressDirectoryNeighborhoodEnd":"",
         "Preposition":"",
         "OfficialStreetPatent":"",
         "NationalAddressDirectoryStreetKey":"00368388",
         "OfficialStreetName":"Godofredo de Barros",
         "BigUserStreetExistenceIndicator":"N",
         "Complement":"S",
         "DataType":"full"
      }
   },
   "IsActive":false,
   "Neighborhood":"Vila Engenho Novo",
   "Number":"",
   "PostalCode":"06416050",
   "State":"São Paulo",
   "StateAcronym":"SP",
   "Street":"Rua Godofredo de Barros",
   "StreetAbbreviation":"R Godofredo de Barros",
   "StreetType":"Rua"
}
```

# Profile.GetClientProfileData
Lista os endereço do usuario logado

```javascript
corebiz.profile.getClientProfileData(function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "attachmentId":"clientProfileData",
   "email":"rafael.cruz@corebiz.com.br",
   "firstName":null,
   "lastName":null,
   "document":null,
   "documentType":null,
   "phone":null,
   "corporateName":null,
   "tradeName":null,
   "corporateDocument":null,
   "stateInscription":null,
   "corporatePhone":null,
   "isCorporate":false,
   "profileCompleteOnLoading":false,
   "profileErrorOnLoading":false
}
```

# Profile.GetAddress
Mostra o endereço do usuario logado

```javascript
var addressName = 'Minha Casa 2';

corebiz.profile.getAddress(addressName, function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "userId":"3432e607-8f23-11e6-94b4-0a0b727613e9",
   "addressName":"Minha Casa 2",
   "addressType":"1",
   "postalCode":"06416-070",
   "city":"BARUERI",
   "state":"SP",
   "country":"BRA",
   "street":"RUA MAJOR ÁLVARO FONTES",
   "number":"54244",
   "neighborhood":"VILA ENGENHO NOVO 1",
   "complement":null,
   "reference":null,
   "receiverName":"RAFAEL CRUZ",
   "geoCoordinate":null
}
```

# Profile.GetAddresses
Mostra todos os endereços do usuario logado

```javascript

corebiz.profile.getAddresses(addressName, function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "email":"rafael.cruz@corebiz.com.br",
   "availableAddresses":[  
      {  
         "addressType":"residential",
         "receiverName":"RAFAEL CRUZ",
         "addressId":"Minha Casa",
         "postalCode":"06416-075",
         "city":"BARUERI",
         "state":"SP",
         "country":"BRA",
         "street":"RUA Joao da Silva",
         "number":"10",
         "neighborhood":"VILA Silva",
         "complement":"",
         "reference":"",
         "geoCoordinates":[  

         ]
      },
      {  
         "addressType":"residential",
         "receiverName":"RAFAEL CRUZ",
         "addressId":"Minha Casa 3",
         "postalCode":"06416-070",
         "city":"BARUERI",
         "state":"SP",
         "country":"BRA",
         "street":"RUA MAJOR ÁLVARO FONTES",
         "number":"54244",
         "neighborhood":"VILA ENGENHO NOVO 1",
         "complement":"",
         "reference":"",
         "geoCoordinates":[  

         ]
      }
   ]
}
```

# Profile.saveAddress
Salva o endereço do usuario

```javascript
corebiz.profile.saveAddress({
    'addressName':'Minha Casa 2',
    'receiverName':'RAFAEL CRUZ',
    'addressType': 1,
    'postalCode':'06416-070',
    'street':'RUA MAJOR ÁLVARO FONTES',
    'number':54244,
    'complement':'',
    'reference':'',
    'neighborhood':'VILA ENGENHO NOVO 1',
    'city':'BARUERI',
    'state':'SP',
    'country':'BRA',
    'userId':'555c43ff-c97c-43a8-8bfc-2e76e2255cc0',
    'addressId':''
},function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**
Vazio

# Profile.SaveProfile
Salva os dados do usuario

```javascript
corebiz.profile.saveProfile({
    'firstName':'Rafael',
    'lastName':'Cruzy1',
    'nickName':'',
    'birthDate':'20/09/1985',
    'gender':'male',
    'email':'rafael.cruz@corebiz.com.br',
    'homePhone':'(11) 9525-42354',
    'businessPhone':'',
    'isCorporate':'False',
    'userId':'555c43ff-c97c-43a8-8bfc-2e76e2255cc0',
    'document':'123.456.789-09'
},function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

Vazio

# Profile.RemoveAddress
Remove o endereço do usuario

```javascript
corebiz.profile.removeAddress("Minha Casa");
```
**Resposta**

Vazio

# Profile.Loggout
Desloga o usuario

```javascript
corebiz.profile.loggout(); // Com redirecionamento
corebiz.profile.loggout(function(){  // Sem redirecionamento

},function(){

});
```
**Resposta**

Vazio

# Corebiz.Order
Metodos de informações do pedido

# Order.List 
Metodos de informações do pedido

```javascript
corebiz.order.list(function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
[{  
   "orderId":"668821850024-01",
   "orderGroup":"668821850024",
   "state":"canceled",
   "isCheckedIn":false,
   "sellerOrderId":"00-668821850024-01",
   "storeId":null,
   "value":10000,
   "items":[  
      {  
         "uniqueId":"4EAA348682C04F1693F9EC2685ABE5FC",
         "id":"3",
         "productId":"3",
         "refId":null,
         "ean":"SKUVRCOR1TAM1",
         "name":"Produto Variação Cor e Tam SKU Variação Cor1 e Tam 1",
         "skuName":"SKU Variação Cor1 e Tam 1",
         "modalType":null,
         "priceValidUntil":"2017-10-13T17:30:35.8445791Z",
         "tax":0,
         "price":10000,
         "listPrice":10000,
         "manualPrice":null,
         "sellingPrice":10000,
         "rewardValue":0,
         "isGift":false,
         "additionalInfo":{  
            "brandName":"Marca Moda",
            "brandId":"2000000",
            "offeringInfo":null,
            "offeringType":null,
            "offeringTypeId":null
         },
         "preSaleDate":null,
         "productCategoryIds":"/4/5/",
         "productCategories":{  
            "4":"Moda",
            "5":"Vestuario"
         },
         "defaultPicker":null,
         "handlerSequence":0,
         "handling":false,
         "quantity":1,
         "seller":"1",
         "imageUrl":"//corebiz.vteximg.com.br/arquivos/ids/155398-55-55/carexemplo.png",
         "detailUrl":"/produto-variacao-cor-e-tam/p",
         "components":[  

         ],
         "bundleItems":[  

         ],
         "attachments":[  

         ],
         "itemAttachment":{  
            "name":null,
            "content":{  

            }
         },
         "attachmentOfferings":[  

         ],
         "offerings":[  
            {  
               "type":"Embalagem para presente",
               "id":"2",
               "name":"Embalagem para presente",
               "allowGiftMessage":true,
               "attachmentOfferings":[  
                  {  
                     "name":"message",
                     "required":false,
                     "schema":{  
                        "text":{  
                           "maximumNumberOfCharacters":300,
                           "domain":[  

                           ]
                        }
                     }
                  }
               ],
               "price":500
            }
         ],
         "priceTags":[  

         ],
         "availability":"available",
         "measurementUnit":"un",
         "unitMultiplier":1
      }
   ],
   "sellers":[  
      {  
         "id":"1",
         "name":"corebiz",
         "logo":""
      }
   ],
   "totals":[  
      {  
         "id":"Items",
         "name":"Total dos Itens",
         "value":10000
      },
      {  
         "id":"Discounts",
         "name":"Total dos Descontos",
         "value":0
      },
      {  
         "id":"Shipping",
         "name":"Total do Frete",
         "value":0
      },
      {  
         "id":"Tax",
         "name":"Total da Taxa",
         "value":0
      }
   ],
   "clientProfileData":{  
      "attachmentId":"clientProfileData",
      "email":"rafael.cruz@corebiz.com.br",
      "firstName":"Rafael",
      "lastName":"Cruz",
      "document":"12345678909",
      "documentType":"cpf",
      "phone":"+551144446666",
      "corporateName":null,
      "tradeName":null,
      "corporateDocument":null,
      "stateInscription":"",
      "corporatePhone":null,
      "isCorporate":false,
      "profileCompleteOnLoading":null,
      "profileErrorOnLoading":null
   },
   "ratesAndBenefitsData":{  
      "attachmentId":"ratesAndBenefitsData",
      "rateAndBenefitsIdentifiers":[  

      ],
      "teaser":[  

      ]
   },
   "shippingData":{  
      "attachmentId":"shippingData",
      "address":{  
         "addressType":"residential",
         "receiverName":"RetiradaNaLoja",
         "addressId":"953ac3772d8f4422b4f80a83460b09dd",
         "postalCode":"22775-039",
         "city":"Rio de Janeiro",
         "state":"RJ",
         "country":"BRA",
         "street":"Avenida Embaixador Abelardo Bueno",
         "number":"3401",
         "neighborhood":"Barra da Tijuca",
         "complement":"22775-039",
         "reference":null,
         "geoCoordinates":[  

         ]
      },
      "logisticsInfo":[  
         {  
            "itemIndex":0,
            "selectedSla":"Retirada na loja",
            "slas":[  
               {  
                  "id":"Retirada na loja",
                  "name":"Retirada na loja",
                  "deliveryIds":[  
                     {  
                        "courierId":"16fca1f",
                        "warehouseId":"1_1",
                        "dockId":"1",
                        "courierName":"Retirada na loja",
                        "quantity":1
                     }
                  ],
                  "shippingEstimate":"0bd",
                  "shippingEstimateDate":null,
                  "lockTTL":"12d",
                  "availableDeliveryWindows":[  

                  ],
                  "deliveryWindow":null,
                  "price":0,
                  "listPrice":0,
                  "tax":0,
                  "pickupStoreInfo":{  
                     "isPickupStore":false,
                     "friendlyName":null,
                     "address":null,
                     "additionalInfo":null,
                     "dockId":null
                  }
               },
               {  
                  "id":"Normal",
                  "name":"Normal",
                  "deliveryIds":[  
                     {  
                        "courierId":"1",
                        "warehouseId":"1_1",
                        "dockId":"1",
                        "courierName":"Transportadora",
                        "quantity":1
                     }
                  ],
                  "shippingEstimate":"3bd",
                  "shippingEstimateDate":null,
                  "lockTTL":"12d",
                  "availableDeliveryWindows":[  

                  ],
                  "deliveryWindow":null,
                  "price":500,
                  "listPrice":500,
                  "tax":0,
                  "pickupStoreInfo":{  
                     "isPickupStore":false,
                     "friendlyName":null,
                     "address":null,
                     "additionalInfo":null,
                     "dockId":null
                  }
               }
            ],
            "shipsTo":[  
               "BRA"
            ],
            "itemId":"3"
         }
      ],
      "availableAddresses":[  
         {  
            "addressType":"residential",
            "receiverName":"RetiradaNaLoja",
            "addressId":"953ac3772d8f4422b4f80a83460b09dd",
            "postalCode":"22775-039",
            "city":"Rio de Janeiro",
            "state":"RJ",
            "country":"BRA",
            "street":"Avenida Embaixador Abelardo Bueno",
            "number":"3401",
            "neighborhood":"Barra da Tijuca",
            "complement":"22775-039",
            "reference":null,
            "geoCoordinates":[  

            ]
         }
      ]
   },
   "paymentData":{  
      "attachmentId":"paymentData",
      "transactionId":"46572E3415AA4C65B8749B12631C6CE5",
      "payments":[  
         {  
            "id":"17D49E4434BF41A59B4A36724A4BB09D",
            "paymentSystem":"201",
            "paymentSystemName":"Nome da Promissória",
            "value":10000,
            "installments":1,
            "connectorResponses":{  

            },
            "referenceValue":10000,
            "cardHolder":null,
            "cardNumber":null,
            "firstDigits":null,
            "lastDigits":null,
            "cvv2":null,
            "expireMonth":null,
            "expireYear":null,
            "url":null,
            "koinUrl":null,
            "tid":null,
            "redemptionCode":null,
            "giftCardId":null,
            "giftCardProvider":null,
            "giftCardAsDiscount":null,
            "group":"promissory",
            "dueDate":null,
            "accountId":null,
            "parentAccountId":null
         }
      ],
      "giftCards":[  

      ],
      "transactions":[  
         {  
            "isActive":true,
            "transactionId":"46572E3415AA4C65B8749B12631C6CE5",
            "merchantName":"COREBIZ",
            "payments":[  
               {  
                  "id":"17D49E4434BF41A59B4A36724A4BB09D",
                  "paymentSystem":"201",
                  "paymentSystemName":"Nome da Promissória",
                  "value":10000,
                  "installments":1,
                  "connectorResponses":{  

                  },
                  "referenceValue":10000,
                  "cardHolder":null,
                  "cardNumber":null,
                  "firstDigits":null,
                  "lastDigits":null,
                  "cvv2":null,
                  "expireMonth":null,
                  "expireYear":null,
                  "url":null,
                  "koinUrl":null,
                  "tid":null,
                  "redemptionCode":null,
                  "giftCardId":null,
                  "giftCardProvider":null,
                  "giftCardAsDiscount":null,
                  "group":"promissory",
                  "dueDate":null,
                  "accountId":null,
                  "parentAccountId":null
               }
            ]
         }
      ],
      "merchantName":"COREBIZ"
   },
   "clientPreferencesData":null,
   "giftRegistryData":null,
   "marketingData":null,
   "storePreferencesData":{  
      "countryCode":"BRA",
      "checkToSavePersonDataByDefault":false,
      "templateOptions":{  
         "toggleCorporate":false
      },
      "timeZone":"E. South America Standard Time",
      "currencyCode":"BRL",
      "currencyLocale":1046,
      "currencySymbol":"R$",
      "currencyFormatInfo":{  
         "currencyDecimalDigits":2,
         "currencyDecimalSeparator":",",
         "currencyGroupSeparator":".",
         "currencyGroupSize":3,
         "startsWithCurrencySymbol":true
      }
   },
   "openTextField":{  
      "attachmentId":"openTextField",
      "value":"{ machineCode: \"RJO1234\", address:\"Av. Embaixador Abelardo Bueno - 3401 - 22775039 - Rio de Janeiro - RJ, Posto Ipiranga, Das 24h\"}"
   },
   "customData":null,
   "hooksData":null,
   "changeData":null,
   "salesChannel":"1",
   "followUpEmail":"cb46095a93024a289a27abc593238a02@ct.vtex.com.br",
   "creationDate":"2016-10-13T17:30:36.9251596Z",
   "lastChange":"2016-11-12T17:30:51.0426706Z",
   "timeZoneCreationDate":"2016-10-13T14:30:36.9251596",
   "timeZoneLastChange":"2016-11-12T15:30:51.0426706",
   "isCompleted":true,
   "hostName":"corebiz",
   "merchantName":null,
   "userType":"",
   "roundingError":0,
   "allowCancellation":false
}]
```

# Order.OrderByIdOrEmail  
Metodos de informações do pedido

```javascript
corebiz.order.orderByIdOrEmail("668821850024-01", function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "orderId":"668821850024-01",
   "orderGroup":"668821850024",
   "state":"canceled",
   "isCheckedIn":false,
   "sellerOrderId":"00-668821850024-01",
   "storeId":null,
   "value":10000,
   "items":[  
      {  
         "uniqueId":"4EAA348682C04F1693F9EC2685ABE5FC",
         "id":"3",
         "productId":"3",
         "refId":null,
         "ean":"SKUVRCOR1TAM1",
         "name":"Produto Variação Cor e Tam SKU Variação Cor1 e Tam 1",
         "skuName":"SKU Variação Cor1 e Tam 1",
         "modalType":null,
         "priceValidUntil":"2017-10-13T17:30:35.8445791Z",
         "tax":0,
         "price":10000,
         "listPrice":10000,
         "manualPrice":null,
         "sellingPrice":10000,
         "rewardValue":0,
         "isGift":false,
         "additionalInfo":{  
            "brandName":"Marca Moda",
            "brandId":"2000000",
            "offeringInfo":null,
            "offeringType":null,
            "offeringTypeId":null
         },
         "preSaleDate":null,
         "productCategoryIds":"/4/5/",
         "productCategories":{  
            "4":"Moda",
            "5":"Vestuario"
         },
         "defaultPicker":null,
         "handlerSequence":0,
         "handling":false,
         "quantity":1,
         "seller":"1",
         "imageUrl":"//corebiz.vteximg.com.br/arquivos/ids/155398-55-55/carexemplo.png",
         "detailUrl":"/produto-variacao-cor-e-tam/p",
         "components":[  

         ],
         "bundleItems":[  

         ],
         "attachments":[  

         ],
         "itemAttachment":{  
            "name":null,
            "content":{  

            }
         },
         "attachmentOfferings":[  

         ],
         "offerings":[  
            {  
               "type":"Embalagem para presente",
               "id":"2",
               "name":"Embalagem para presente",
               "allowGiftMessage":true,
               "attachmentOfferings":[  
                  {  
                     "name":"message",
                     "required":false,
                     "schema":{  
                        "text":{  
                           "maximumNumberOfCharacters":300,
                           "domain":[  

                           ]
                        }
                     }
                  }
               ],
               "price":500
            }
         ],
         "priceTags":[  

         ],
         "availability":"available",
         "measurementUnit":"un",
         "unitMultiplier":1
      }
   ],
   "sellers":[  
      {  
         "id":"1",
         "name":"corebiz",
         "logo":""
      }
   ],
   "totals":[  
      {  
         "id":"Items",
         "name":"Total dos Itens",
         "value":10000
      },
      {  
         "id":"Discounts",
         "name":"Total dos Descontos",
         "value":0
      },
      {  
         "id":"Shipping",
         "name":"Total do Frete",
         "value":0
      },
      {  
         "id":"Tax",
         "name":"Total da Taxa",
         "value":0
      }
   ],
   "clientProfileData":{  
      "attachmentId":"clientProfileData",
      "email":"rafael.cruz@corebiz.com.br",
      "firstName":"Rafael",
      "lastName":"Cruz",
      "document":"12345678909",
      "documentType":"cpf",
      "phone":"+551144446666",
      "corporateName":null,
      "tradeName":null,
      "corporateDocument":null,
      "stateInscription":"",
      "corporatePhone":null,
      "isCorporate":false,
      "profileCompleteOnLoading":null,
      "profileErrorOnLoading":null
   },
   "ratesAndBenefitsData":{  
      "attachmentId":"ratesAndBenefitsData",
      "rateAndBenefitsIdentifiers":[  

      ],
      "teaser":[  

      ]
   },
   "shippingData":{  
      "attachmentId":"shippingData",
      "address":{  
         "addressType":"residential",
         "receiverName":"RetiradaNaLoja",
         "addressId":"953ac3772d8f4422b4f80a83460b09dd",
         "postalCode":"22775-039",
         "city":"Rio de Janeiro",
         "state":"RJ",
         "country":"BRA",
         "street":"Avenida Embaixador Abelardo Bueno",
         "number":"3401",
         "neighborhood":"Barra da Tijuca",
         "complement":"22775-039",
         "reference":null,
         "geoCoordinates":[  

         ]
      },
      "logisticsInfo":[  
         {  
            "itemIndex":0,
            "selectedSla":"Retirada na loja",
            "slas":[  
               {  
                  "id":"Retirada na loja",
                  "name":"Retirada na loja",
                  "deliveryIds":[  
                     {  
                        "courierId":"16fca1f",
                        "warehouseId":"1_1",
                        "dockId":"1",
                        "courierName":"Retirada na loja",
                        "quantity":1
                     }
                  ],
                  "shippingEstimate":"0bd",
                  "shippingEstimateDate":null,
                  "lockTTL":"12d",
                  "availableDeliveryWindows":[  

                  ],
                  "deliveryWindow":null,
                  "price":0,
                  "listPrice":0,
                  "tax":0,
                  "pickupStoreInfo":{  
                     "isPickupStore":false,
                     "friendlyName":null,
                     "address":null,
                     "additionalInfo":null,
                     "dockId":null
                  }
               },
               {  
                  "id":"Normal",
                  "name":"Normal",
                  "deliveryIds":[  
                     {  
                        "courierId":"1",
                        "warehouseId":"1_1",
                        "dockId":"1",
                        "courierName":"Transportadora",
                        "quantity":1
                     }
                  ],
                  "shippingEstimate":"3bd",
                  "shippingEstimateDate":null,
                  "lockTTL":"12d",
                  "availableDeliveryWindows":[  

                  ],
                  "deliveryWindow":null,
                  "price":500,
                  "listPrice":500,
                  "tax":0,
                  "pickupStoreInfo":{  
                     "isPickupStore":false,
                     "friendlyName":null,
                     "address":null,
                     "additionalInfo":null,
                     "dockId":null
                  }
               }
            ],
            "shipsTo":[  
               "BRA"
            ],
            "itemId":"3"
         }
      ],
      "availableAddresses":[  
         {  
            "addressType":"residential",
            "receiverName":"RetiradaNaLoja",
            "addressId":"953ac3772d8f4422b4f80a83460b09dd",
            "postalCode":"22775-039",
            "city":"Rio de Janeiro",
            "state":"RJ",
            "country":"BRA",
            "street":"Avenida Embaixador Abelardo Bueno",
            "number":"3401",
            "neighborhood":"Barra da Tijuca",
            "complement":"22775-039",
            "reference":null,
            "geoCoordinates":[  

            ]
         }
      ]
   },
   "paymentData":{  
      "attachmentId":"paymentData",
      "transactionId":"46572E3415AA4C65B8749B12631C6CE5",
      "payments":[  
         {  
            "id":"17D49E4434BF41A59B4A36724A4BB09D",
            "paymentSystem":"201",
            "paymentSystemName":"Nome da Promissória",
            "value":10000,
            "installments":1,
            "connectorResponses":{  

            },
            "referenceValue":10000,
            "cardHolder":null,
            "cardNumber":null,
            "firstDigits":null,
            "lastDigits":null,
            "cvv2":null,
            "expireMonth":null,
            "expireYear":null,
            "url":null,
            "koinUrl":null,
            "tid":null,
            "redemptionCode":null,
            "giftCardId":null,
            "giftCardProvider":null,
            "giftCardAsDiscount":null,
            "group":"promissory",
            "dueDate":null,
            "accountId":null,
            "parentAccountId":null
         }
      ],
      "giftCards":[  

      ],
      "transactions":[  
         {  
            "isActive":true,
            "transactionId":"46572E3415AA4C65B8749B12631C6CE5",
            "merchantName":"COREBIZ",
            "payments":[  
               {  
                  "id":"17D49E4434BF41A59B4A36724A4BB09D",
                  "paymentSystem":"201",
                  "paymentSystemName":"Nome da Promissória",
                  "value":10000,
                  "installments":1,
                  "connectorResponses":{  

                  },
                  "referenceValue":10000,
                  "cardHolder":null,
                  "cardNumber":null,
                  "firstDigits":null,
                  "lastDigits":null,
                  "cvv2":null,
                  "expireMonth":null,
                  "expireYear":null,
                  "url":null,
                  "koinUrl":null,
                  "tid":null,
                  "redemptionCode":null,
                  "giftCardId":null,
                  "giftCardProvider":null,
                  "giftCardAsDiscount":null,
                  "group":"promissory",
                  "dueDate":null,
                  "accountId":null,
                  "parentAccountId":null
               }
            ]
         }
      ],
      "merchantName":"COREBIZ"
   },
   "clientPreferencesData":null,
   "giftRegistryData":null,
   "marketingData":null,
   "storePreferencesData":{  
      "countryCode":"BRA",
      "checkToSavePersonDataByDefault":false,
      "templateOptions":{  
         "toggleCorporate":false
      },
      "timeZone":"E. South America Standard Time",
      "currencyCode":"BRL",
      "currencyLocale":1046,
      "currencySymbol":"R$",
      "currencyFormatInfo":{  
         "currencyDecimalDigits":2,
         "currencyDecimalSeparator":",",
         "currencyGroupSeparator":".",
         "currencyGroupSize":3,
         "startsWithCurrencySymbol":true
      }
   },
   "openTextField":{  
      "attachmentId":"openTextField",
      "value":"{ machineCode: \"RJO1234\", address:\"Av. Embaixador Abelardo Bueno - 3401 - 22775039 - Rio de Janeiro - RJ, Posto Ipiranga, Das 24h\"}"
   },
   "customData":null,
   "hooksData":null,
   "changeData":null,
   "salesChannel":"1",
   "followUpEmail":"cb46095a93024a289a27abc593238a02@ct.vtex.com.br",
   "creationDate":"2016-10-13T17:30:36.9251596Z",
   "lastChange":"2016-11-12T17:30:51.0426706Z",
   "timeZoneCreationDate":"2016-10-13T14:30:36.9251596",
   "timeZoneLastChange":"2016-11-12T15:30:51.0426706",
   "isCompleted":true,
   "hostName":"corebiz",
   "merchantName":null,
   "userType":"",
   "roundingError":0,
   "allowCancellation":false
}
```

# Order.OMS  
Lista o pedido pelo id do pedido

```javascript
corebiz.order.oms("668821850024-01", function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});

```
**Resposta**

```javascript
{  
   "orderId":"668821850024-01",
   "sequence":"500022",
   "marketplaceOrderId":"",
   "marketplaceServicesEndpoint":"http://portal.vtexcommerce.com.br/api/oms?an=corebiz",
   "sellerOrderId":"00-668821850024-01",
   "origin":"Marketplace",
   "affiliateId":"",
   "salesChannel":"1",
   "merchantName":null,
   "status":"canceled",
   "statusDescription":"Cancelado",
   "value":10000,
   "creationDate":"2016-10-13T17:30:36.9251596+00:00",
   "lastChange":"2016-11-12T17:30:57.7684161+00:00",
   "orderGroup":"668821850024",
   "totals":[  
      {  
         "id":"Items",
         "name":"Total dos Itens",
         "value":10000
      },
      {  
         "id":"Discounts",
         "name":"Total dos Descontos",
         "value":0
      },
      {  
         "id":"Shipping",
         "name":"Total do Frete",
         "value":0
      },
      {  
         "id":"Tax",
         "name":"Total da Taxa",
         "value":0
      }
   ],
   "items":[  
      {  
         "uniqueId":"C2E2CC2B1A474CD6BFC432516D2B8D59",
         "id":"3",
         "productId":"3",
         "ean":"SKUVRCOR1TAM1",
         "lockId":"00-668821850024-01",
         "itemAttachment":{  
            "content":{  

            },
            "name":null
         },
         "attachments":[  

         ],
         "quantity":1,
         "seller":"1",
         "name":"Produto Variação Cor e Tam SKU Variação Cor1 e Tam 1",
         "refId":null,
         "price":10000,
         "listPrice":10000,
         "manualPrice":null,
         "priceTags":[  

         ],
         "imageUrl":"//corebiz.vteximg.com.br/arquivos/ids/155398-55-55/carexemplo.png",
         "detailUrl":"/produto-variacao-cor-e-tam/p",
         "components":[  

         ],
         "bundleItems":[  

         ],
         "params":[  

         ],
         "offerings":[  

         ],
         "sellerSku":"3",
         "priceValidUntil":null,
         "commission":0,
         "tax":0,
         "preSaleDate":null,
         "additionalInfo":{  
            "brandName":"Marca Moda",
            "brandId":"2000000",
            "categoriesIds":"/4/5/",
            "productClusterId":"135",
            "commercialConditionId":"1",
            "dimension":{  
               "cubicweight":0.5625,
               "height":15,
               "length":15,
               "weight":100,
               "width":15
            },
            "offeringInfo":null,
            "offeringType":null,
            "offeringTypeId":null
         },
         "measurementUnit":"un",
         "unitMultiplier":1,
         "sellingPrice":10000,
         "isGift":false,
         "shippingPrice":null,
         "rewardValue":0
      }
   ],
   "marketplaceItems":[  

   ],
   "clientProfileData":{  
      "id":"clientProfileData",
      "email":"a789681e25b04628b79d7e5b12e629fc@ct.vtex.com.br",
      "firstName":"Rafael",
      "lastName":"Cruz",
      "documentType":"cpf",
      "document":"12345678909",
      "phone":"+551144446666",
      "corporateName":null,
      "tradeName":null,
      "corporateDocument":null,
      "stateInscription":"",
      "corporatePhone":null,
      "isCorporate":false,
      "userProfileId":"555c43ff-c97c-43a8-8bfc-2e76e2255cc0"
   },
   "giftRegistryData":null,
   "marketingData":null,
   "ratesAndBenefitsData":{  
      "id":"ratesAndBenefitsData",
      "rateAndBenefitsIdentifiers":[  

      ]
   },
   "shippingData":{  
      "id":"shippingData",
      "address":{  
         "addressType":"residential",
         "receiverName":"RetiradaNaLoja",
         "addressId":"953ac3772d8f4422b4f80a83460b09dd",
         "postalCode":"22775-039",
         "city":"Rio de Janeiro",
         "state":"RJ",
         "country":"BRA",
         "street":"Avenida Embaixador Abelardo Bueno",
         "number":"3401",
         "neighborhood":"Barra da Tijuca",
         "complement":"22775-039",
         "reference":null
      },
      "logisticsInfo":[  
         {  
            "itemIndex":0,
            "selectedSla":"Retirada na loja",
            "lockTTL":"12d",
            "price":0,
            "listPrice":0,
            "sellingPrice":0,
            "deliveryWindow":null,
            "deliveryCompany":"Retirada na loja",
            "shippingEstimate":"0bd",
            "shippingEstimateDate":null,
            "slas":[  
               {  
                  "id":"Retirada na loja",
                  "name":"Retirada na loja",
                  "shippingEstimate":"0bd",
                  "deliveryWindow":null,
                  "price":0
               },
               {  
                  "id":"Normal",
                  "name":"Normal",
                  "shippingEstimate":"3bd",
                  "deliveryWindow":null,
                  "price":500
               }
            ],
            "shipsTo":[  
               "BRA"
            ],
            "deliveryIds":[  
               {  
                  "courierId":"16fca1f",
                  "courierName":"Retirada na loja",
                  "dockId":"1",
                  "quantity":1,
                  "warehouseId":"1_1"
               }
            ]
         }
      ],
      "trackingHints":null
   },
   "paymentData":{  
      "transactions":[  
         {  
            "isActive":true,
            "transactionId":"46572E3415AA4C65B8749B12631C6CE5",
            "payments":[  
               {  
                  "id":"17D49E4434BF41A59B4A36724A4BB09D",
                  "paymentSystem":"201",
                  "paymentSystemName":"Nome da Promissória",
                  "value":10000,
                  "installments":1,
                  "referenceValue":10000,
                  "cardHolder":null,
                  "cardNumber":null,
                  "firstDigits":null,
                  "lastDigits":null,
                  "cvv2":null,
                  "expireMonth":null,
                  "expireYear":null,
                  "url":null,
                  "giftCardId":null,
                  "giftCardName":null,
                  "giftCardCaption":null,
                  "redemptionCode":null,
                  "group":"promissory",
                  "tid":null,
                  "dueDate":null,
                  "connectorResponses":{  

                  }
               }
            ]
         }
      ]
   },
   "packageAttachment":{  
      "packages":[  

      ]
   },
   "sellers":[  
      {  
         "id":"1",
         "name":"corebiz",
         "logo":""
      }
   ],
   "callCenterOperatorData":null,
   "followUpEmail":"cb46095a93024a289a27abc593238a02@ct.vtex.com.br",
   "lastMessage":"corebiz Pedido realizado com sucesso! realizado em: 13/10/2016 Olá, Rafael. Obrigado por comprar em nossa loja. Os detalhes do pedido encont",
   "hostname":"corebiz",
   "changesAttachment":null,
   "openTextField":{  
      "value":"{ machineCode: \"RJO1234\", address:\"Av. Embaixador Abelardo Bueno - 3401 - 22775039 - Rio de Janeiro - RJ, Posto Ipiranga, Das 24h\"}"
   },
   "roundingError":0,
   "orderFormId":"a4f5d1f6fc1547ecb4c01d5db9e47eb5",
   "commercialConditionData":null
}
```

# Corebiz.Cart
Metodos de informações do carrinho

# Cart.List 
Lista todos os items do carrinho

```javascript
// Padrão
corebiz.cart.list(function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});

// Ordenada

var criteria = 'add_time';
var asceding = 'false';

/*
criteria: name ou add_time
ascending: true para crescente e false para decrescente
*/

corebiz.cart.listOrdination(function(resp){

    console.log(resp);
    
}, function(err){

    console.error(err);
    
}, false, criteria, asceding);
```
**Resposta**

```javascript
{  
   "resume":{  
      "total_cart":9899,
      "quantity_cart":1
   },
   "items":[  
      {  
         "uniqueId":"3C181015F9294BECB6AB3DAEECC3971A",
         "id":"30",
         "productId":"9",
         "refId":"camisetaazulpp",
         "ean":null,
         "name":"camiseta azul-pp",
         "skuName":"azul-pp",
         "modalType":null,
         "priceValidUntil":"2018-05-01T02:03:56.4800255Z",
         "tax":0,
         "price":9899,
         "listPrice":20000,
         "manualPrice":null,
         "sellingPrice":9899,
         "rewardValue":0,
         "isGift":false,
         "additionalInfo":{  
            "brandName":"Marca Eletrônicos",
            "brandId":"2000001",
            "offeringInfo":null,
            "offeringType":null,
            "offeringTypeId":null
         },
         "preSaleDate":null,
         "productCategoryIds":"/4/5/",
         "productCategories":{  
            "4":"Moda",
            "5":"Vestuario"
         },
         "defaultPicker":null,
         "handlerSequence":0,
         "handling":false,
         "quantity":1,
         "seller":"1",
         "imageUrl":"http://corebiz.vteximg.com.br/arquivos/ids/156440-55-55/ico-socks-2x.png",
         "detailUrl":"/camiseta/p",
         "components":[  

         ],
         "bundleItems":[  

         ],
         "attachments":[  

         ],
         "itemAttachment":{  
            "name":null,
            "content":{  

            }
         },
         "attachmentOfferings":[  

         ],
         "offerings":[  

         ],
         "priceTags":[  

         ],
         "availability":"available",
         "measurementUnit":"un",
         "unitMultiplier":1
      }
   ]
}
```

# Cart.Remove 
Remove os item do carrinho

```javascript
// Remove todos os items do carrinho
corebiz.cart.remove(-1, function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});

// Remove o item index 0 do carrinho
corebiz.cart.remove(0, function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

orderForm

# Cart.Add
Adiciona o item no carrinho

```javascript

var sc = 1;

corebiz.cart.add(sc, [
    {
        'id': '21',
        'quantity': 3,
        'seller': 1
    }
], function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

orderForm

# Cart.Update
Atualiza o item no carrinho

```javascript
corebiz.cart.update([
    {
        'id': '21',
        'quantity': 4,
        'seller': 1,
        'index': 0
    }
], function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

orderForm

# Cart.AddCoupon
Adiciona um cupon no carrinho

```javascript
corebiz.cart.addCoupon('desc10', function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**

Orderform

# Cart.GetCouponActive
Selecionar o cupom ativo do carrinho

```javascript
corebiz.cart.getCouponActive(function (response) {

    console.log(response);

}, function (error) {

    console.error(error);

});
```
**Resposta**

```javascript
{  
   "marketingData":{  
      "attachmentId":"marketingData",
      "utmSource":null,
      "utmMedium":null,
      "utmCampaign":null,
      "utmipage":null,
      "utmiPart":null,
      "utmiCampaign":null,
      "coupon":"CupomDeTest10",
      "marketingTags":[  

      ]
   },
   "totalizers":[  
      {  
         "id":"Items",
         "name":"Total dos Itens",
         "value":9899
      },
      {  
         "id":"Discounts",
         "name":"Total dos Descontos",
         "value":-990
      }
   ],
   "value":8909
}
```

# Cart.DeleteCoupon
Remove o cupom do carrinho

```javascript
corebiz.cart.deleteCoupon(function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**

Boolean

# Cart.SimulationShipping
Simulação de frete do carrinho

```javascript
corebiz.cart.simulationShipping('06416060', function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**

orderForm

# Corebiz.OrderForm
Simulação de frete do carrinho

# OrderForm.List
Metodos de informações do OrderForm

```javascript
corebiz.orderForm.list(function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**
```javascript
{  
   "orderFormId":"35480778a7354d1b8162515599255c13",
   "salesChannel":"1",
   "loggedIn":true,
   "isCheckedIn":false,
   "storeId":null,
   "allowManualPrice":false,
   "canEditData":true,
   "userProfileId":"555c43ff-c97c-43a8-8bfc-2e76e2255cc0",
   "userType":null,
   "ignoreProfileData":false,
   "value":0,
   "messages":[  

   ],
   "items":[  

   ],
   "selectableGifts":[  

   ],
   "products":[  

   ],
   "totalizers":[  

   ],
   "shippingData":{  
      "attachmentId":"shippingData",
      "address":{  
         "addressType":null,
         "receiverName":null,
         "addressId":"0e33c6c6387c4a8da1c02d80a399eed2",
         "postalCode":"06416070",
         "city":"Barueri",
         "state":"SP",
         "country":"BRA",
         "street":"Rua Major Álvaro Fontes",
         "number":null,
         "neighborhood":"Vila Engenho Novo",
         "complement":null,
         "reference":null,
         "geoCoordinates":[  

         ]
      },
      "logisticsInfo":[  

      ],
      "availableAddresses":[  
         {  
            "addressType":null,
            "receiverName":null,
            "addressId":"0e33c6c6387c4a8da1c02d80a399eed2",
            "postalCode":"06416070",
            "city":"Barueri",
            "state":"SP",
            "country":"BRA",
            "street":"Rua Major Álvaro Fontes",
            "number":null,
            "neighborhood":"Vila Engenho Novo",
            "complement":null,
            "reference":null,
            "geoCoordinates":[  

            ]
         }
      ]
   },
   "clientProfileData":{  
      "attachmentId":"clientProfileData",
      "email":"rafael.cruz@corebiz.com.br",
      "firstName":null,
      "lastName":null,
      "document":null,
      "documentType":null,
      "phone":null,
      "corporateName":null,
      "tradeName":null,
      "corporateDocument":null,
      "stateInscription":null,
      "corporatePhone":null,
      "isCorporate":false,
      "profileCompleteOnLoading":false,
      "profileErrorOnLoading":false
   },
   "paymentData":{  
      "installmentOptions":[  
         {  
            "paymentSystem":"2",
            "bin":null,
            "paymentName":null,
            "paymentGroupName":null,
            "value":39596,
            "installments":[  
               {  
                  "count":1,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":39596,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":1,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":39596,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":2,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":19798,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":2,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":19798,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":3,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":13198,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":3,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":13198,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":4,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":9899,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":4,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":9899,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":5,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":7919,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":5,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":7919,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":6,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":6599,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":6,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":6599,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":7,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":5656,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":7,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":5656,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":8,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":4949,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":8,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":4949,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":9,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":4399,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":9,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":4399,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":10,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":3959,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":10,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":3959,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":11,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":3599,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":11,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":3599,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":12,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":3299,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":12,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":3299,
                        "total":39596
                     }
                  ]
               }
            ]
         },
         {  
            "paymentSystem":"4",
            "bin":null,
            "paymentName":null,
            "paymentGroupName":null,
            "value":39596,
            "installments":[  
               {  
                  "count":1,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":39596,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":1,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":39596,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":2,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":19798,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":2,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":19798,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":3,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":13198,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":3,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":13198,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":4,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":9899,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":4,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":9899,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":5,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":7919,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":5,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":7919,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":6,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":6599,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":6,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":6599,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":7,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":5656,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":7,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":5656,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":8,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":4949,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":8,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":4949,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":9,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":4399,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":9,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":4399,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":10,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":3959,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":10,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":3959,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":11,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":3599,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":11,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":3599,
                        "total":39596
                     }
                  ]
               },
               {  
                  "count":12,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":3299,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":12,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":3299,
                        "total":39596
                     }
                  ]
               }
            ]
         },
         {  
            "paymentSystem":"16",
            "bin":null,
            "paymentName":null,
            "paymentGroupName":null,
            "value":39596,
            "installments":[  
               {  
                  "count":1,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":39596,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":1,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":39596,
                        "total":39596
                     }
                  ]
               }
            ]
         },
         {  
            "paymentSystem":"201",
            "bin":null,
            "paymentName":null,
            "paymentGroupName":null,
            "value":39596,
            "installments":[  
               {  
                  "count":1,
                  "hasInterestRate":false,
                  "interestRate":0,
                  "value":39596,
                  "total":39596,
                  "sellerMerchantInstallments":[  
                     {  
                        "id":"COREBIZ",
                        "count":1,
                        "hasInterestRate":false,
                        "interestRate":0,
                        "value":39596,
                        "total":39596
                     }
                  ]
               }
            ]
         }
      ],
      "paymentSystems":[  
         {  
            "id":201,
            "name":"Nome da Promissória",
            "groupName":"custom201PaymentGroupPaymentGroup",
            "validator":{  
               "regex":null,
               "mask":null,
               "cardCodeRegex":null,
               "cardCodeMask":null,
               "weights":null,
               "useCvv":false,
               "useExpirationDate":false,
               "useCardHolderName":false,
               "useBillingAddress":false
            },
            "stringId":"201",
            "template":"custom201PaymentGroupPaymentGroup-template",
            "requiresDocument":false,
            "isCustom":true,
            "description":"Descrição da Promissória",
            "requiresAuthentication":false,
            "dueDate":"2017-05-08T02:13:57.026031Z"
         },
         {  
            "id":16,
            "name":"Vale",
            "groupName":"giftCardPaymentGroup",
            "validator":{  
               "regex":null,
               "mask":null,
               "cardCodeRegex":null,
               "cardCodeMask":null,
               "weights":null,
               "useCvv":false,
               "useExpirationDate":false,
               "useCardHolderName":false,
               "useBillingAddress":false
            },
            "stringId":"16",
            "template":"giftCardPaymentGroup-template",
            "requiresDocument":false,
            "isCustom":false,
            "description":null,
            "requiresAuthentication":false,
            "dueDate":"2017-05-02T02:13:57.0572039Z"
         },
         {  
            "id":2,
            "name":"Visa",
            "groupName":"creditCardPaymentGroup",
            "validator":{  
               "regex":"^4",
               "mask":"9999 9999 9999 9999",
               "cardCodeRegex":"^[0-9]{3}$",
               "cardCodeMask":"999",
               "weights":[  
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2
               ],
               "useCvv":true,
               "useExpirationDate":true,
               "useCardHolderName":true,
               "useBillingAddress":true
            },
            "stringId":"2",
            "template":"creditCardPaymentGroup-template",
            "requiresDocument":false,
            "isCustom":false,
            "description":null,
            "requiresAuthentication":false,
            "dueDate":"2017-05-04T02:13:57.0728322Z"
         },
         {  
            "id":4,
            "name":"Mastercard",
            "groupName":"creditCardPaymentGroup",
            "validator":{  
               "regex":"^((5(1(0(0(0([0-9])|[1-9][0-9])|[1-9][0-9]{0})|[1-9][0-9]{0})|3(0(4(0([0-9]))|[0-3][0-9]{0}))|2[0-9]{0})|^5(3(0(4(2([0-9])|[3-9][0-9])|[5-9][0-9]{0})|[1-9][0-9]{0})|5(9(9(9([0-9])|[0-8][0-9])|[0-8][0-9]{0})|[0-8][0-9]{0})|4[0-9]{0}))|((508116)\\d{0,10})|((502121)\\d{0,10})|((589916)\\d{0,10})|(2[0-9]{15}))",
               "mask":"9999 9999 9999 9999",
               "cardCodeRegex":"^[0-9]{3}$",
               "cardCodeMask":"999",
               "weights":[  
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2,
                  1,
                  2
               ],
               "useCvv":true,
               "useExpirationDate":true,
               "useCardHolderName":true,
               "useBillingAddress":true
            },
            "stringId":"4",
            "template":"creditCardPaymentGroup-template",
            "requiresDocument":false,
            "isCustom":false,
            "description":null,
            "requiresAuthentication":false,
            "dueDate":"2017-05-04T02:13:57.1040339Z"
         }
      ],
      "payments":[  

      ],
      "giftCards":[  

      ],
      "giftCardMessages":[  

      ],
      "availableAccounts":[  

      ],
      "availableTokens":[  

      ]
   },
   "marketingData":null,
   "sellers":[  

   ],
   "clientPreferencesData":{  
      "attachmentId":"clientPreferencesData",
      "locale":"pt-BR",
      "optinNewsLetter":null
   },
   "storePreferencesData":{  
      "countryCode":"BRA",
      "checkToSavePersonDataByDefault":true,
      "templateOptions":{  
         "toggleCorporate":false
      },
      "timeZone":"E. South America Standard Time",
      "currencyCode":"BRL",
      "currencyLocale":1046,
      "currencySymbol":"R$",
      "currencyFormatInfo":{  
         "currencyDecimalDigits":2,
         "currencyDecimalSeparator":",",
         "currencyGroupSeparator":".",
         "currencyGroupSize":3,
         "startsWithCurrencySymbol":true
      }
   },
   "giftRegistryData":null,
   "openTextField":{  
      "attachmentId":"openTextField",
      "value":null
   },
   "customData":null,
   "hooksData":null,
   "ratesAndBenefitsData":null,
   "itemsOrdination":null
}
```

# OrderForm.Clear
Limpa o orderform

```javascript
corebiz.orderForm.clear();
```

# Corebiz.Checkout
Metodos de informações do Checkout

# Checkout.AddAttachmentsOpenTextField
Adiciona a informação de anexo no checkout

```javascript
corebiz.checkout.addAttachmentsOpenTextField('ola', function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```
**Resposta**

orderForm

# Checkout.AddItemAttachment
Adiciona a informação de anexo no item do carrinho

```javascript
corebiz.checkout.addItemAttachment({
    'ITEM': '08', 
    'ITEM2': '07'
}, "TESTE", 0, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

**Resposta**

orderForm

# Checkout.SaveClientProfileData
Salva os dados do cliente no DataLayer

```javascript
corebiz.checkout.saveClientProfileData({
    "gender": 2,
    "estadoCivil": 6,
    "documentType": "cpf",
    "isNewsletterOptIn": "true",
    "email": "rafaelcruz12@hotmail.com",
    "document": "12345678909",
    "rg": "45645655456",
    "firstName": "Rafael",
    "lastName": "Cruz",
    "phone": "(11) 94445-8866",
    "birthDate": "20/09/1985",
    "homePhone": "(11) 1111-1111"
}, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(resp);

});
```

**Resposta**

orderForm

# Checkout.SaveShippingData 
Salva os dados do endereço do cliente no DataLayer

```javascript
corebiz.checkout.saveShippingData({
    "country": "BRA",
    "addressType": "Residencial",
    "postalCode": "06416-070",
    "neighborhood": "Vila Engenho Novo",
    "street": "Rua Major Álvaro Fontes",
    "city": "Barueri", "state": "SP",
    "number": "556",
    "receiverName": "Rafael"
}, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(resp);

});
```

**Resposta**

orderForm

# Checkout.GetDeliveryShipping 
Lista as transportadoras

```javascript
corebiz.checkout.getDeliveryShipping(function (resp) {

    console.log(resp);

}, function (error) {

    console.error(resp);

});
```

**Resposta**

orderForm

# Checkout.ChooseDeliveryShipping
Escolhe a transportadora para a entrega

```javascript
var index = 2;
corebiz.checkout.chooseDeliveryShipping(index, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(resp);

});
```

**Resposta**

orderForm

# Checkout.getAddressInformation
Dado um endereço incompleto com postalCode e country, devolve um endereço completo, com cidade, estado, rua, e quaisquer outras informações disponíveis.

```javascript
// O `postalCode` deve ser o CEP do cliente, no caso do Brasil
var postalCode = '22250-040';
// Desse jeito também funciona
// var postalCode = '22250040';

// O `country` deve ser a sigla de 3 letras do país
var country = 'BRA';

var address = {
  postalCode: postalCode,
  country: country
};

corebiz.checkout.getAddressInformation(address, function(resp){

    console.log("resp", resp);

}, function(err){

    console.error("err", err);

});
```

**Resposta**

```javascript
{
    "postalCode":"22250040",
    "city":"Rio de Janeiro",
    "state":"RJ",
    "country":"BRA",
    "street":"Praia de Botafogo",
    "number":"",
    "neighborhood":"Botafogo",
    "complement":"",
    "reference":"",
    "geoCoordinates":[]
}
```

# Corebiz.MasterData
Metodos de acesso ao Masterdata
http://raml.vtexlab.com.br/ds/

# MasterData.Insert 
Adiciona dados no MD

```javascript
corebiz.masterData.insert({ 'name': 'Rafael' },"CL/documents", function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

**Resposta**

```javascript
{
  "Id": "CL-b818cbda-e489-11e6-94f4-0ac138d2d42e",
  "Href": "http://api.vtex.com/my-store-name/dataentities/CL/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e"
}
```


# MasterData.Select 
Seleciona os dados do MD

```javascript
corebiz.masterData.select({
    '_where': 'email=mail@email.com',
    '_fields': 'id,email'
},"CL/search", '0-1', function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

# MasterData.Update
Atualiza os dados do MD

Por padrão o tipo do envio do arquivo é "PATCH", mas podemos passar um outro tipo como "PUT" no ultimo parametro do metodo.

```javascript

var type = "PUT";

corebiz.masterData.update({ 'name': 'Rafael' }, "CL/documents/123", function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

}, type);
```

**Resposta**

Vazio

# MasterData.Delete
Remove o dados do MD

```javascript
corebiz.masterData.delete("CL/documents/12300054515151510", function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

**Resposta**

Vazio

# Corebiz.Newsletter
Envio de email newsletter

# Newsletter.Send
Enviae email

```javascript
corebiz.newslatter.send({
    'name': 'Rafael Cruz',
    'email': 'rafael@sss.com'
}, function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

**Resposta**

Boolean

# Corebiz.Vtex
Metodos padrões da loja

# Vtex.Dataserver 
Pega a data e hora atual do servidor

```javascript
corebiz.vtex.dataserver(function (resp) {

    console.log(resp);

}, function (error) {

    console.error(error);

});
```

# Storage
Quarda dados no browser do usuario

```javascript
// Criar
corebiz.storage.create("test",[{'name': 'Rafael'},{'name': 'Carlos'}]);
corebiz.storage.create("test2", "ola");

// Selecionar
corebiz.storage.select("test") // [{'name': 'Rafael'},{'name': 'Carlos'}] (array)
corebiz.storage.select("test2") // ola

// Excluir valor
corebiz.storage.remove("test", 1); // index do array

// Excluir storage e valor
corebiz.storage.remove("test2");

```

# Upload
Upload de arquivos na vtex

```javascript

var file = document.getElementById('fileToUpload').files[0];
var size_file = 500000; // 5MB
var types = ['pdf'];
var name_field = "anexo";

corebiz.upload.send(file, "TC", id_MD, size_file, types, name_field, (xhr)=>{

    console.log(xhr);

}, (resp) => {

    console.warn("resp", resp);
    
}, (error, msg) => {

    console.error("error", error, msg);
    
})

```

# JSON exemplo para desenvolvimento
Para mostrar um json padrão de resposta basta passar "true" com ultimo parametro nos metodos de listagem, como carrinho, profile, categorias, filtros, calculo de frete etc.

```javascript

var category = "moda";

corebiz.category.filters(category, function (response) {

    console.log(response);

}, function (err) {

    console.error(err);

}, true);

// Passar true com ultimo parametro.
```