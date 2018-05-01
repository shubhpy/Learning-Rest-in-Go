use dummyStore;
var bulk = db.store.initializeUnorderedBulkOp();
bulk.insert(   { _id: 1, title: "Apple iMac Pro", image: "http://images.fonearena.com/blog/wp-content/uploads/2017/06/Apple-iMac-Pro-2017_fonearena-03-1024x745.jpg", price: 5000, rating: 4 });
bulk.insert(   { _id: 2, title: "Google Pixel 2", image: "http:://example.com/p2.jpg", price: 2000, rating: 5});
bulk.insert(   { _id: 3, title: "Apple iPhone X", image: "http:://example.com/p3.jpg", price: 3000, rating: 5});
bulk.insert(   { _id: 4, title: "Google Chromebook", image: "http:://example.com/p4.jpg", price: 4000, rating: 5});
bulk.insert(   { _id: 5, title: "Microsoft Holo Lens", image: "http:://example.com/p5.jpg", price: 1000, rating: 4});
bulk.insert(   { _id: 6, title: "Samsung Galaxy S8", image: "http:://example.com/p6.jpg", price: 3000, rating: 3});
bulk.execute();