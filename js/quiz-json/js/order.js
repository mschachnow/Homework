(function () {
    'use strict';
    const orderList = document.getElementById('orderList');
    //let itemLog = [];
    class Item {
        constructor(item, total, quantity) {
            this.item = item;
            this.total = total;
            this.quantity = quantity;
            this.price = total / quantity;
        }
    }

    class Order {
        constructor(name, address) {
            let itemLog = [];
            this.name = name;
            this.address = address;
            this.items = itemLog;

            itemLog.forEach(item1 => {
                console.log(item1);
                const anItem = new Item(item1.item, item1.total, item1.quantity, item1.price);
                console.log(anItem.price);
                itemLog.push(anItem);

            });

            console.log(itemLog);
        }

        get total() {
            for (let i = 0; i < itemLog.length; i++) {
                let totalCost = 0;
                totalCost += itemLog[i].price;
                console.log(itemLog[i].price);
            }
            console.log(this.totalCost);
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
                orderLog.push(new Order(order.customer, order.address, order.itemLog, order.total));
                console.log(order.address);
                orderLog.forEach(orderFile => {
                    console.log(orderFile.items);
                    console.log(order.total);

                    let node = document.createElement("LI");
                    let textnode = document.createTextNode([`Costumer: ${orderFile.name} \n \nAddress: ${orderFile.address}\n \n Items:${orderFile.items}\n \nTotal: ${order.total}`]);
                    //let node2 = document.createElement("ul");
                    let itemsInList = document.createElement("li");
                    /*for (i = 0; i < itemLog.length; i++) {
                        console.log(itemLog[i]);
                       
                        let textnode2 = document.createTextNode([`Items:${orderFile.items}\n \n`]);
                        itemsInList.appendChild(textnode2)
                    }*/
                    node.appendChild(textnode);
                    //itemsInList.appendChild(textnode2);
                    document.getElementById("orderList").appendChild(node);
                    //document.getElementById("orderList").appendChild(textnode2);
                });
            });
        }
    }
    loadOrders();
}());