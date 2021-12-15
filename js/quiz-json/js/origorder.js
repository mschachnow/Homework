(function () {
    'use strict';
    // SL - you dont actually use this, you refetch later...
    const orderList = document.getElementById('orderList');
    //let itemLog = [];
    class Item {
        constructor(item, total, quantity) {
            this.item = item;

            // SL - not a problem but we have no need for total
            this.total = total;
            this.quantity = quantity;
            this.price = total / quantity;
        }
    }

    class Order {
        constructor(name, address) {
            // SL - why a local variable - and this.items too 4 lines down?
            let itemLog = [];
            this.name = name;
            this.address = address;
            this.items = itemLog;

            // SL - you just set itemLog to be an empty array 5 lines up. What are forEaching through here?
            itemLog.forEach(item1 => {
                console.log(item1);
                const anItem = new Item(item1.item, item1.total, item1.quantity, item1.price);
                console.log(anItem.price);

                // SL - so your adding this to the same array were looping through? Loop would never end. Of course in this particular we never get in since itemLog is empty...
                itemLog.push(anItem);

            });

            console.log(itemLog);
        }

        get total() {
            // SL - what is itemLog? Dont you mean this.items?
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
                // SL - what is order.itemLog? looking in the json I see order.items
                orderLog.push(new Order(order.customer, order.address, order.itemLog, order.total));
                console.log(order.address);

                // SL - Your doing this inside the forEach so each order will add itself and all previous orders already in orderLog
                // this should be done once, after all orders are loaded
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

// SL - looks to me like you need more practice.
// Are you using a linter? I see lots of lint errors, many which directly relate to things I commented on