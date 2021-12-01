(function () {
    'use strict';
    const orderList = document.getElementById('orderList');
    const itemLog = [];

    class Item {
        constructor(item, total, quantity, price) {
            this.item = item;
            this.total = total;
            this.quantity = quantity;
            this.price = total / quantity;
        }
    }

    class Order {
        constructor(name, address, itemLog) {
            this.name = name;
            this.address = address;
            this.items = itemLog;
            itemLog.forEach(item1 => {
                console.log(item1);
                const anItem = new Item(item1.item, item1.total, item1.quantity, item1.price);
                console.log(anItem);
                itemLog.push(anItem);
            }
            ); console.log(itemLog);
        }

        get total() {
            for (let i = 0; i < itemLog.length; i++) {
                let totalCost = 0;
                totalCost += itemLog[i].price;
            }
            return `Total: ${this.totalCost}`;
        }
    }



    async function loadJson(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            return result;
        }
        catch (e) {
            console.log('error');

        }
    }

    let orderLog = [];
    async function loadOrders() {
        const orders = await loadJson('order.json');
        if (orders) {
            orders.forEach(order => {

                orderLog.push(new Order(order.customer, order.address, order.items));
                console.log(order.items);
                orderLog.forEach(orderFile => {
                    console.log(orderFile);
                    let node = document.createElement("LI");
                    let textnode = document.createTextNode([`Costumer: ${orderFile.items} \n \nAddress: ${orderFile.address} \n \nTotal: `]);
                    //let node2 = document.createElement("ul");
                    //let itemsInList = document.createElement("li");
                    //let textnode2 = document.createTextNode([`Items:${order.items}\n \n`]);

                    //node.appendChild(textnode);
                    //itemsInList.appendChild(textnode2);
                    //console.log(order.items);
                    //document.getElementById("orderList").appendChild(node);
                });
            });
        }

        const items = await loadJson('order.json');
        if (items) {
            items.forEach(item => {
                itemLog.push(new Item(itemLog.item, itemLog.price));
                console.log(item);
                console.log(itemLog);
                let itemsInList = document.createElement("LI");
                let textnode2 = document.createTextNode([`Items: ${itemLog}\n \n`]);
                itemsInList.appendChild(textnode2);
                document.getElementById("itemLog").appendChild(itemsInList);
            });
        }
    }
    loadOrders();

}());