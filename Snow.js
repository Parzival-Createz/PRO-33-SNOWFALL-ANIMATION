class Snow {
    constructor(x, y) {
        var options = {
            friction: 0.01,
            restitution: 0.01,
            density: 0.001
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.image = loadImage("snow4.png");
        World.add(world, this.body);
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 25, 25);
    }

    update() {
        if (this.body.position.y > 400) {
            Matter.Body.setPosition(this.body, { x: round(random(0, 800)), y: -10 });
        }
    }
}