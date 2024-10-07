export interface Profile {
    id: number;
    username: string;
}

export interface Tea {
  id: number;
  name: string;
  slug: string;
  image: string;
  origin: string;
  style: string;
  caffeine: string;
  caffenie_level: string;
  decription: string;
  color_description: string;
  taste_description: string;
}

export type TeaHardcoded = {
  type: string;
  summary: string;
  origin: string;
  creation: string;
  withering?: string;
  rolling?: string;
  oxidation: string;
  heating: string;
  climate: string;
};

export const allHardcodedTeas: TeaHardcoded[] = [
  {
    type: "green",
    summary:
      "Green tea is one of the most widely consumed types of tea worldwide and is renowned for its fresh flavor, light color, and numerous health benefits.",
    origin:
      "Green tea originated in China thousands of years ago, and it is also produced in other countries such as Japan, Korea, and various regions in Southeast Asia.",
    creation:
      "Green tea is made from the leaves of the Camellia sinensis plant, just like other types of tea. However, green tea's minimal oxidation process sets it apart, which helps preserve its natural color, flavor, and antioxidants.",
    withering:
      "Green tea leaves may undergo a brief withering period to reduce moisture content slightly. However, this step is typically shorter compared to other types of tea such as black or oolong tea.",
    rolling:
      "The process of rolling is optional and varies depending on the specific variety of green tea being produced.",
    oxidation:
      "Green teas undergo minimal oxidation compared to other types of tea such as black tea or oolong tea. The oxidation process is intentionally halted soon after harvesting to preserve the natural green color, delicate flavor, and beneficial compounds present in the tea leaves.",
    heating:
      "The most crucial step in green tea production is the heating process, which is used to halt oxidation. There are two primary methods for heating green tea leaves: pan-firing and steaming. In the pan-firing method, the leaves are quickly heated in a large pan or wok over high heat. This process helps to denature enzymes responsible for oxidation. In the steaming method, the leaves are exposed to steam, which achieves the same purpose of halting oxidation while preserving the green color and fresh flavor of the leaves.",
    climate:
      "Green tea plants thrive in regions with moderate temperatures, high humidity, and consistent rainfall. The quality and flavor of green tea are influenced by factors such as terroir, altitude, and soil composition. For example, Japanese green teas like Sencha and Matcha are often grown in shaded conditions, which alters the flavor profile and increases the chlorophyll content in the leaves.",
  },
  {
    type: "white",
    summary:
      "White tea is a delicate and lightly processed type of tea, its unique characteristics and flavor profile are attributed to its minimal processing, which sets it apart from other types of tea like black or green tea.",
    origin:
      "Traditionally, it's cultivated in regions with moderate temperatures and high humidity, such as the Fujian province in China.",
    creation:
      "The leaves and buds are typically plucked in early spring when they are at their youngest and most tender. This timing is crucial as it contributes to the delicate flavor and aroma of the tea.",
    withering:
      "Unlike other types of tea that undergo extensive processing, white tea undergoes minimal processing. With a significantly shortened withering period.",
    rolling:
      "White tea leaves are generally not rolled or shaped extensively, as is common in the production of other teas like oolong or black tea. Instead, they may undergo slight rolling to shape them gently without causing oxidation.",
    oxidation:
      "Unlike black or oolong tea, which undergo significant oxidation through processes like rolling and fermentation, white tea is minimally oxidized. This means that the enzymatic browning process, which leads to the development of darker flavors and colors, is largely avoided.",
    heating:
      "After withering, white tea leaves are subjected to minimal heat to halt oxidation. This step is crucial for preserving the delicate flavors and aromas of the tea. Heating methods can vary but typically involve either low-temperature baking or air-drying.",
    climate:
      "White tea plants thrive in regions with specific climate conditions. They prefer moderate temperatures, high humidity, and well-drained soil. ",
  },
  {
    type: "oolong",
    summary:
      "Oolong tea is believed to have originated in China's Fujian province, although it is also produced in Taiwan and other regions.",
    origin:
      "Oolong tea undergoes a semi-oxidation process, which means that the tea leaves are allowed to oxidize partially before being heated to halt oxidation. ",
    creation:
      "The duration of withering for oolong tea is shorter compared to black tea, as the goal is to achieve only partial oxidation.",
    withering:
      "The duration of withering for oolong tea is shorter compared to black tea, as the goal is to achieve only partial oxidation.",
    rolling:
      "The degree of rolling can vary, affecting the final flavor and aroma of the oolong tea.",
    oxidation:
      "The oxidation level of oolong typically ranges from around 10% to 70%, depending on the desired style. This partial oxidation gives oolong tea its characteristic flavor profile.",
    heating:
      "Once the desired level of oxidation is reached, the oxidation process is halted by heating the tea leaves. This step preserves the partially oxidized state of the leaves and helps to lock in their unique flavors and aromas.",
    climate:
      "Oolong tea plants thrive in regions with moderate temperatures, high humidity, and consistent rainfall, similar to other tea varieties. The terroir, including factors such as soil composition, altitude, and climate, can influence the flavor, aroma, and overall quality of oolong tea.",
  },
  {
    type: "black",
    summary:
      "Black tea is a type of tea that is known for its robust flavor, dark color, and strong aroma.",
    origin:
      "Black tea originates primarily from China, India, Sri Lanka, and Kenya.",
    creation:
      "What sets black tea apart is its unique and extreme oxidation process, compared to other teas.",
    withering:
      "The process of withering is significantly longer for black teas than any other. The extent of withering can vary depending on factors such as the desired characteristics of the final tea, the specific variety of tea being produced, and regional processing traditions.",
    rolling:
      "After withering, the leaves are bruised or rolled to break their cell walls. This allows for the release of enzymes and initiates the oxidation process. The degree of rolling can vary, affecting the final flavor and aroma of the oolong tea.",
    oxidation:
      "Oxidation is a crucial step in black tea production. During oxidation, enzymes in the tea leaves interact with oxygen in the air, resulting in chemical changes that give black tea its characteristic flavor, color, and aroma.",
    heating:
      "Once the desired level of oxidation is achieved, the leaves are subjected to heat to halt the oxidation process. This step is crucial in black tea production as it preserves the flavor and color of the tea leaves.",
    climate:
      "The climate plays a significant role in black tea production. Tea plants thrive in regions with moderate temperatures, high humidity, and consistent rainfall. Altitude also influences the flavor profile of black tea, with higher altitude teas often possessing more complex flavors.",
  },
];

export enum Categories {
  all = "all",
  herbal = "herbal",
  black = "black",
  green = "green",
  oolong = "oolong",
  white = "white",
  favs = "favorites",
};
