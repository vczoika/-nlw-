const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')
Database.then(async db => {
    // insert table data
    await saveOrphanage(db, {
        lat: "-23.5408711", 
        lng: "-46.3178662",
        name: "Lar das meninas",
        about: "Presta assistência.",
        whatsapp: "123123123",
        images: [
            "https://images.unsplash.com/photo-1602459831426-7f1bd5b4339a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

            "https://images.unsplash.com/photo-1601168649373-b1f6f2b6e735?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Venha visitar.",
        opening_hours: "Horário 18h até as 8h",
        open_on_weekends: "1"
    })
    // get table data
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // get only 1 orphanage
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // delete table
    // await db.run("DELETE FROM orphanages WHERE id = '4'")
    // await db.run("DELETE FROM orphanages WHERE id = '5'")
    
})