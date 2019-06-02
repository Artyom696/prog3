class GrassPredator {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 8
        this.directions = []
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            this.energy--
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.energy <= 0) {
            this.mernel();
        }
    }
    utel() {
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = random(datarkVandakner);
        var datarkVandaknererku = this.yntrelVandak(2);
        var norVandakerku = random(datarkVandaknererku);

        if (norVandak) {
            this.energy++
            matrix[this.y][this.x] = 0
            matrix[norVandak[1]][norVandak[0]] = 4

            this.x = norVandak[0]
            this.y = norVandak[1]

            for (var i in gishatichArr) {
                var xotakerObj = gishatichArr[i];
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
        else if (norVandakerku) {
            this.energy++
            matrix[this.y][this.x] = 0;
            matrix[norVandakerku[1]][norVandakerku[0]] = 4;

            this.x = norVandakerku[0];
            this.y = norVandakerku[1];

            for (var i in xotakerArr) {
                var xotakerObj = xotakerArr[i];
                // error  ----------------------------------------------------------------------------------          
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
        if (this.energy >= 10) {
            this.bazmanal();
        }
    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;

            var norXotaGishatich = new GrassPredator(norx, nory);
            xotgishatichArr.push(norXotaGishatich);
            this.energy = 8
            for (var i in gishatichArr) {
                var xotagishatichObj = gishatichArr[i];
                if (xotagishatichObj.x == norx && xotagishatichObj.y == nory) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }
    mernel() {
        matrix[this.y][this.x] = 0;
        for (var i in xotgishatichArr) {
            if (this.y == xotgishatichArr[i].y && this.x == xotgishatichArr[i].x) {
                xotgishatichArr.splice(i, 1);
            }
        }
    }
}
