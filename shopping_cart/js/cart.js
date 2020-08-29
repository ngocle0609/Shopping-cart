

// add items cart
const listProducts = [
    {
        id: 1,
        name: 'Ưu đãi sốc từ TiGi',
        price: 599000,
        img: 'tigi.jpg'
    },
    {
        id: 2,
        name: 'Trọn bộ combo TiGi',
        price: 320000,
        img: 'combo_gom.jpg'
    },
    {
        id: 3,
        name: 'Kevin Merphy',
        price: 299000,
        img: 'kevin.jpg'
    },
    {
        id: 5,
        name: 'Sáp Glanzen 60g',
        price: 230000,
        img: 'glanzen_red.jpg'
    },
    {
        id: 6,
        name: 'Gôm xịt tóc Lady Killer',
        price: 110000,
        img: 'lady_killer.jpg'
    },
    {
        id: 7,
        name: 'Sáp By Vilance Gold',
        price: 299000,
        img: 'Vilance.jpg'
    },
    {
        id: 8,
        name: 'TEA TREE SHAPPING',
        price: 330000,
        img: 'teatre.jpg'
    },
    {
        id: 9,
        name: 'Gôm xịt KMS THERA',
        price: 110000,
        img: 'xittaophong.jpg'
    },
]

// render product html
var products = '';
listProducts.forEach(items => {
    products += '<div class="collection-item"><div class="collecton__item--img" > <img src="images/' + items.img + '" alt=""> </div> <div class="collection__item--title"><a href="#">' + items.name + '</a></div><div class="collection__item--price"><div class="item-price">' + items.price + '₫</div><div class="item-price-sale">777,000₫</div></div><a href="javascript:void()" class="overlay-cart" onclick="addcart(' + items.id + ')"><i class="fa fa-shopping-cart"></i> </a></div >';
});

document.getElementById('shop-cart').innerHTML = products;

// icon cart
var bagCart = [];
function addcart(id) {
    // text trả về giá trị mảng mới khi hàm find dc lặp qua
    text = bagCart.find(q => q.id == id);
    if (text == undefined) {
        var spDetail = listProducts.find(s => s.id == id);
        var sanphamCart = {
            id: spDetail.id,
            name: spDetail.name,
            price: spDetail.price,
            img: spDetail.img,
            soluong: 1
        }
        bagCart.push(sanphamCart);
    } else {
        var sanphamCart = {
            id: text.id,
            name: text.name,
            price: text.price,
            soluong: text.soluong + 1
        }
        let index = bagCart.indexOf(bagCart.find(ss => ss.id == id));
        bagCart[index] = Object.assign(sanphamCart);
    }

    var qty = bagCart.length;
    localStorage.setItem('cart', JSON.stringify(bagCart));
    document.getElementById('count-cart').innerHTML = qty;
    return false;
}

var show = JSON.parse(localStorage.getItem('cart'));
var qtyhihi = show.length;
document.getElementById('count-cart').innerHTML = qtyhihi;

$('#giohang').click(function () {
    $('#showwww').load("cart.html", function () {
        var shows = JSON.parse(localStorage.getItem('cart'));
        showCs = '';
        total = 0;
        shows.forEach(hh => {
            showCs += '<tr><td class="cart-images" ><a href="#"><img src="images/' + hh.img + '" alt=""> </a> </td> <td class="cart-productsduct"><h4>' + hh.name + '</h4><p>Thương hiệu : 30shine</p><button class="btn-danger cart-btn" onclick="delcart(' + hh.id + ')">Xóa</button></td><td class="cart-price">' + hh.price + '₫</td><td class="cart-qty"><input  onkeyup="onKey(' + hh.id + ')" type="number" name="" idpr="' + hh.id + '" class="qty-input" id="qty' + hh.id + '" value="' + hh.soluong + '"> </td><td class="cart-total">' + hh.price * hh.soluong + '₫</td> </tr>';
            total = total + (hh.soluong * hh.price);
        });
        showCs += '<script src="js/cart.js"></script>';
        var qtyhihi = shows.length;
        document.getElementById('count-cart').innerHTML = qtyhihi;
        document.getElementById('show-cart').innerHTML = showCs;
        document.getElementById('total').innerHTML = total;
        $('.qty-input').keyup(function () {
            var qty = $(this).val();
            var id = $(this).attr('idpr');
            // text = shows.find(q => q.id == id);
            // var sanphamCart = {
            //     id: text.id,
            //     name: text.name,
            //     price: text.price,
            //     soluong: qty
            // }
            // let index = shows.indexOf(shows.find(ss => ss.id == id));
            // shows[index] = Object.assign(sanphamCart);
            // showCs = '';
            // shows.forEach(hh => {
            //     showCs += '<tr><td class="cart-images" ><a href="#"><img src="images/kevin.jpg" alt=""> </a> </td> <td class="cart-productsduct"><h4>' + hh.name + '</h4><p>Thương hiệu : 30shine</p><button class="btn-danger cart-btn" onclick="delcart(' + hh.id + ')">Xóa</button></td><td class="cart-price">' + hh.price + '₫</td><td class="cart-qty"><input type="number" name="" idpr="' + hh.id + '" class="qty-input" value="' + hh.soluong + '"> </td><td class="cart-total">' + hh.price * hh.soluong + '₫</td> </tr>';
            // });
            // showCs += '<script src="js/cart.js"></script>';
            // var qtyhihi = shows.length;
            // document.getElementById('count-cart').innerHTML = qtyhihi;
            // document.getElementById('show-cart').innerHTML = showCs;
            // localStorage.setItem('cart', JSON.stringify(shows));
        })

    })
    return false;
})
function onKey(id) {
    var qty = document.getElementById('qty' + id).value;
    var shows = JSON.parse(localStorage.getItem('cart'));
    if (qty == 0) {
        delcart(id);
    } else {
        text = shows.find(q => q.id == id);
        var sanphamCart = {
            id: text.id,
            name: text.name,
            price: text.price,
            soluong: qty
        }
        let index = shows.indexOf(shows.find(ss => ss.id == id));
        shows[index] = Object.assign(sanphamCart);
        showCs = '';
        total = 0;
        shows.forEach(hh => {
            showCs += '<tr><td class="cart-images" ><a href="#"><img src="images/kevin.jpg" alt=""> </a> </td> <td class="cart-productsduct"><h4>' + hh.name + '</h4><p>Thương hiệu : 30shine</p><button class="btn-danger cart-btn" onclick="delcart(' + hh.id + ')">Xóa</button></td><td class="cart-price">' + hh.price + '₫</td><td class="cart-qty"><input  onkeyup="onKey(' + hh.id + ')" type="number" name="" idpr="' + hh.id + '" class="qty-input" id="qty' + hh.id + '" value="' + hh.soluong + '"> </td><td class="cart-total">' + hh.price * hh.soluong + '₫</td> </tr>';
            total = total + (hh.soluong * hh.price);

        });
        var qtyhihi = shows.length;
        document.getElementById('total').innerHTML = total;
        document.getElementById('count-cart').innerHTML = qtyhihi;
        document.getElementById('show-cart').innerHTML = showCs;
        localStorage.setItem('cart', JSON.stringify(shows));
    }

}
function delcart(id) {
    var shows = JSON.parse(localStorage.getItem('cart'));
    cartNew = shows.filter(q => q.id != id);
    localStorage.setItem('cart', JSON.stringify(cartNew));
    var shows = JSON.parse(localStorage.getItem('cart'));
    showCs = '';
    total = 0;

    shows.forEach(hh => {
        showCs += '<tr><td class="cart-images" ><a href="#"><img src="images/kevin.jpg" alt=""> </a> </td> <td class="cart-productsduct"><h4>' + hh.name + '</h4><p>Thương hiệu : 30shine</p><button class="btn-danger cart-btn" onclick="delcart(' + hh.id + ')">Xóa</button></td><td class="cart-price">' + hh.price + '₫</td><td class="cart-qty"><input  onkeyup="onKey(' + hh.id + ')" type="number" name="" idpr="' + hh.id + '" class="qty-input" id="qty' + hh.id + '" value="' + hh.soluong + '"> </td><td class="cart-total">' + hh.price * hh.soluong + '₫</td> </tr>';
        total = total + (hh.soluong * hh.price);

    });
    var qtyhihi = shows.length;
    document.getElementById('count-cart').innerHTML = qtyhihi;
    document.getElementById('show-cart').innerHTML = showCs;
    document.getElementById('total').innerHTML = total;

}
