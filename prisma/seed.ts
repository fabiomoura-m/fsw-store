const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://i.ibb.co/KVdHFkt/mouses.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/7YLQ82J/01-mx-master-3s.png",
          "https://i.ibb.co/MBZs9mT/02-mx-master-3s.png",
          "https://i.ibb.co/j4tHTjh/03-mx-master-3s.png",
          "https://i.ibb.co/w0XZRmL/04-mx-master-3s.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/QFv5Jv1/01-logi-superlight.png",
          "https://i.ibb.co/zPz3nw9/02-logi-superlight.png",
          "https://i.ibb.co/k2H7R2Y/03-logi-superlight.png",
          "https://i.ibb.co/bdSWb4F/04-logi-superlight.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/d2p4sws/01-logi-lightspeed.png",
          "https://i.ibb.co/jrQwHFD/02-logi-lightspeed.png",
          "https://i.ibb.co/kG9thHj/03-logi-lightspeed.png",
          "https://i.ibb.co/0t7zXVt/04-logi-lightspeed.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/c1S85hq/01-hyperx-dart.png",
          "https://i.ibb.co/hC79nYY/02-hyperx-dart.png",
          "https://i.ibb.co/n7CrqDZ/03-hyperx-dart.png",
          "https://i.ibb.co/BybMJnk/04-hyperx-dart.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/bLdWP5M/01-razer-deathadder.png",
          "https://i.ibb.co/p3GTNGZ/02-razer-deathadder.png",
          "https://i.ibb.co/hZVhqhx/03-razer-deathadder.png",
          "https://i.ibb.co/xmWk8kS/04-razer-deathadder.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl: "https://i.ibb.co/BKxmtPf/keyboards.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/VCKsbZS/01-logi-mx-keys-mini.png",
          "https://i.ibb.co/M5FYh4T/02-logi-mx-keys-mini.png",
          "https://i.ibb.co/cY2gX9Z/03-logi-mx-keys-mini.png",
          "https://i.ibb.co/Rys022L/04-logi-mx-keys-mini.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/HTvscQC/01-logi-mx-keys-s.png",
          "https://i.ibb.co/q0XfM5K/02-logi-mx-keys-s.png",
          "https://i.ibb.co/mJNpSFB/03-logi-mx-keys-s.png",
          "https://i.ibb.co/Z86XKZ7/04-logi-mx-keys-s.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/rHHC13T/01-logi-pop-keys.png",
          "https://i.ibb.co/z4bdprK/02-logi-pop-keys.png",
          "https://i.ibb.co/nw2nYY7/03-logi-pop-keys.png",
          "https://i.ibb.co/RH5cLnS/04-logi-pop-keys.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/FbcHF3c/01-logi-mx-mechanical.png",
          "https://i.ibb.co/w4bcQ7Y/02-logi-mx-mechanical.png",
          "https://i.ibb.co/djdq7LQ/03-logi-mx-mechanical.png",
          "https://i.ibb.co/8ByCSy4/04-logi-mx-mechanical.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/6ySy1dv/01-epomaker-th80.png",
          "https://i.ibb.co/ZzJWY7x/02-epomaker-th80.png",
          "https://i.ibb.co/tqNnt2Z/03-epomaker-th80.png",
          "https://i.ibb.co/KKq96y2/04-epomaker-th80.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/vj919Gg/01-redragon-gamer-ashe.png",
          "https://i.ibb.co/BzqRp1H/02-redragon-gamer-ashe.png",
          "https://i.ibb.co/FJYkjHs/03-redragon-gamer-ashe.png",
          "https://i.ibb.co/09gn2p5/04-redragon-gamer-ashe.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl: "https://i.ibb.co/XSNmKwz/headphones.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/MR1wXFL/01-logi-vibe.png",
          "https://i.ibb.co/6F66wbk/02-logi-vibe.png",
          "https://i.ibb.co/XbXg5rZ/03-logi-vibe.png",
          "https://i.ibb.co/YRg4Lts/04-logi-vibe.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/QJm6RmP/01-logi-lightspeed-phone.png",
          "https://i.ibb.co/Twvj7ZG/02-logi-lightspeed-phone.png",
          "https://i.ibb.co/B3FY8RF/03-logi-lightspeed-phone.png",
          "https://i.ibb.co/J24yHj0/04-logi-lightspeed-phone.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/wh2h3v3/01-logi-astro-a30.png",
          "https://i.ibb.co/nzgr0tQ/02-logi-astro-a30.png",
          "https://i.ibb.co/5xqR8Jz/03-logi-astro-a30.png",
          "https://i.ibb.co/5LTRskn/04-logi-astro-a30.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/VqPLQPn/01-logi-earbuds.png",
          "https://i.ibb.co/DGJRcRw/02-logi-earbuds.png",
          "https://i.ibb.co/FXgw3XY/03-logi-earbuds.png",
          "https://i.ibb.co/5xR1LZH/04-logi-earbuds.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/j6CyZRt/01-hyperx-stinger.png",
          "https://i.ibb.co/6nVBn9V/02-hyperx-stinger.png",
          "https://i.ibb.co/Pz5B0MJ/03-hyperx-stinger.png",
          "https://i.ibb.co/gWxnLkF/04-hyperx-stinger.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/k0CZxww/01-razer-kraken.png",
          "https://i.ibb.co/gWDkB0N/02-razer-kraken.png",
          "https://i.ibb.co/RzQM0T3/03-razer-kraken.png",
          "https://i.ibb.co/bmMG676/04-razer-kraken.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl: "https://i.ibb.co/7KgQPv1/mousepads.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/GP0CDMc/01-logi-powerplay.png",
          "https://i.ibb.co/pbzKXhn/02-logi-powerplay.png",
          "https://i.ibb.co/DKZYNg7/03-logi-powerplay.png",
          "https://i.ibb.co/2WcTVvj/04-logi-powerplay.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/4sb0g43/01-logi-desk-mat.png",
          "https://i.ibb.co/85BV3sp/02-logi-desk-mat.png",
          "https://i.ibb.co/nPWp4Hm/03-logi-desk-mat.png",
          "https://i.ibb.co/CWrd5hF/04-logi-desk-mat.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/J5SjTLC/01-logi-g740.png",
          "https://i.ibb.co/DCMvzMK/02-logi-g740.png",
          "https://i.ibb.co/Mc5PBTv/03-logi-g740.png",
          "https://i.ibb.co/WG7G749/04-logi-g740.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/p6Hf65r/01-logi-studio-series.png",
          "https://i.ibb.co/FWgKZpx/02-logi-studio-series.png",
          "https://i.ibb.co/wstb2hJ/03-logi-studio-series.png",
          "https://i.ibb.co/K9SRMD0/04-logi-studio-series.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/Q6QCxCY/01-force-dark.png",
          "https://i.ibb.co/H4ZHgQJ/02-force-dark.png",
          "https://i.ibb.co/K2RCC5c/03-force-dark.png",
          "https://i.ibb.co/bNJThMQ/04-force-dark.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/C28MRBT/01-force-snow.png",
          "https://i.ibb.co/5sw9rWr/02-force-snow.png",
          "https://i.ibb.co/F4T2XND/03-force-snow.png",
          "https://i.ibb.co/QXgXwfp/04-force-snow.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl: "https://i.ibb.co/ccG0Tgs/monitors.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/wRj21hL/01-dell-S2421-HN.png",
          "https://i.ibb.co/mN99b07/02-dell-S2421-HN.png",
          "https://i.ibb.co/j5yNzyY/03-dell-S2421-HN.png",
          "https://i.ibb.co/2Y9j8dr/04-dell-S2421-HN.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/P90cVkz/01-dell-P2422-H.png",
          "https://i.ibb.co/7pz0kM8/02-dell-P2422-H.png",
          "https://i.ibb.co/xSkt94j/03-dell-P2422-H.png",
          "https://i.ibb.co/VLKWZhx/04-dell-P2422-H.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/Lxq3C5t/01-dell-P2723-QE.png",
          "https://i.ibb.co/8cRfGmZ/02-dell-P2723-QE.png",
          "https://i.ibb.co/XDNDz0v/03-dell-P2723-QE.png",
          "https://i.ibb.co/XtXGT15/04-dell-P2723-QE.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/JKDDxgL/01-dell-S3422-DWG.png",
          "https://i.ibb.co/JdPyCh7/02-dell-S3422-DWG.png",
          "https://i.ibb.co/SnkMTPw/03-dell-S3422-DWG.png",
          "https://i.ibb.co/HT7wty8/04-dell-S3422-DWG.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/0FcPkVm/01-dell-S3222-DGM.png",
          "https://i.ibb.co/X4yvPx9/02-dell-S3222-DGM.png",
          "https://i.ibb.co/BTw8Gnk/03-dell-S3222-DGM.png",
          "https://i.ibb.co/RCKHqzT/04-dell-S3222-DGM.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/ZHWGH4h/01-dell-AW2524-HF.png",
          "https://i.ibb.co/yn94JV3/02-dell-AW2524-HF.png",
          "https://i.ibb.co/DzDkN7Z/03-dell-AW2524-HF.png",
          "https://i.ibb.co/88vmgJ8/04-dell-AW2524-HF.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl: "https://i.ibb.co/WWRxYrt/speakers.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/9G62JVp/01-logi-surround-z607.png",
          "https://i.ibb.co/5GPZPYH/02-logi-surround-z607.png",
          "https://i.ibb.co/YBYKGsS/03-logi-surround-z607.png",
          "https://i.ibb.co/vX86bfH/04-logi-surround-z607.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/gPXxnqh/01-logi-dock.png",
          "https://i.ibb.co/kBNfJ44/02-logi-dock.png",
          "https://i.ibb.co/9tJD8KQ/03-logi-dock.png",
          "https://i.ibb.co/vVBhdW7/04-logi-dock.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/zXcNrwm/01-sony-SA-Z9-R.png",
          "https://i.ibb.co/16BwH5R/02-sony-SA-Z9-R.png",
          "https://i.ibb.co/x5kJ9SG/03-sony-SA-Z9-R.png",
          "https://i.ibb.co/vmSHhjH/04-sony-SA-Z9-R.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/PzMqwpf/01-sony-extra-bass.png",
          "https://i.ibb.co/QH1Zqn3/02-sony-extra-bass.png",
          "https://i.ibb.co/bgFcdBc/03-sony-extra-bass.png",
          "https://i.ibb.co/kmBDn3z/04-sony-extra-bass.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/jZz6FsQ/01-sony-XB23.png",
          "https://i.ibb.co/VgTrdTP/02-sony-XB23.png",
          "https://i.ibb.co/fDkyhyb/03-sony-XB23.png",
          "https://i.ibb.co/mzcJ44b/04-sony-XB23.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/nsnfqVg/01-sony-S200-F.png",
          "https://i.ibb.co/Fxw9dTp/02-sony-S200-F.png",
          "https://i.ibb.co/BjpCsb8/03-sony-S200-F.png",
          "https://i.ibb.co/brJ4G1K/04-sony-S200-F.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
