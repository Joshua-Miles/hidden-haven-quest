const Model = require('../Model')

class Users extends Model {

    constructor(){
        super()
        this.data = users
    }

    
}

module.exports = Users;

const users = [
    {
        id: 1,
        name: 'Mandi',
        image: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/48397182_10156302716493026_6714638865681874944_n.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-1.xx&oh=dc93caf3eebdc1ce4e9ddae7bf5fcd07&oe=5CC855EC',
        number: '+19722071983'
    },
    {
        id: 2,
        name: 'James',
        image: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/18673021_10211208338916495_2150743923921660121_o.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-1.xx&oh=c27d841042c339cc66ec5eb37342f16e&oe=5CC7EDDE',
        number: '+19183611029'
    },
    {
        id: 3,
        name: 'Theresa',
        image: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p240x240/47473870_10213981574712829_6116170005169045504_n.jpg?_nc_cat=101&_nc_ht=scontent-dfw5-1.xx&oh=f3e9bac587e9ab769da9427ee20a4cca&oe=5CD22B60',
        number: '+12816504107'
    },
    {
        id: 4,
        name: 'David',
        image: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/35473260_10212751495361614_5374995143940112384_n.jpg?_nc_cat=111&_nc_ht=scontent-dfw5-1.xx&oh=d53974bd4e13bbb5a3969187c89f5e9a&oe=5CD50C0A',
        number: '+18326234406'
    },
    {
        id: 5,
        name: 'Mel',
        image: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/41331_425001015196_2844910_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=a458936f0ec57be87adc71c0a8bdd8a9&oe=5CD2F5AB',
        number: '+19727406533'
    },
    {
        id: 6,
        name: 'JQ Bean',
        image: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/37179064_1046732145500485_116297719986782208_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=fbd96896b3989e698318621408ef527c&oe=5C8F03E6',
        number: '+18326969919'
    }
]