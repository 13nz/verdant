import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TableView,
  Section,
  Cell,
} from "react-native-tableview-simple";
import React, { useLayoutEffect } from "react";

const Stack = createNativeStackNavigator();

const HomeScreenCell = (props) => {
  return (
    <Cell
		{...props}
		onPress={props.action}
		cellStyle="Basic"
		backgroundColor="transparent"
		highlightUnderlayColor="#ccc"
		style={styles.cell}
		cellContentView={
			<View>
				<View style={styles.imageContainer}>
					<Image
						source={props.imgUri}
						style={styles.image}
						resizeMode="cover"
					/>

					<View style={styles.etaBox}>
						<Text style={styles.etaText}>
							{props.eta} min
						</Text>
					</View>
				</View>

				<Text style={styles.title}>
					{props.title}
				</Text>

				<Text style={styles.restaurantInfo}>
					{props.rating} 🌱 • {props.delivery}
				</Text>

				<Text style={styles.tagline}>
					{props.tagline}
				</Text>
			</View>
		}	
    />
  );
};

const restaurants = [
    {
        title: "Green Garden",
        tagline: "Vegan Cafe • Salads • Smoothies",
        rating: "4.9",
        delivery: "Free Delivery",
        eta: "10-20",
        image: require("./assets/images/green_garden.jpg"),
        menu: [
            {
                title: "Salads",
                contents: [
                    {
                        title: "Garden Salad",
                        subtitle: "Mixed greens, tomatoes, cucumber and balsamic dressing",
                        price: "$10.99",
                        available: true
                    },
                    {
                        title: "Caesar Salad (Vegan)",
                        subtitle: "Romaine lettuce, vegan parmesan and herb croutons",
                        price: "$11.99",
                        available: true
                    },
                    {
                        title: "Quinoa Power Bowl",
                        subtitle: "Quinoa, avocado, roasted vegetables and tahini",
                        price: "$13.49",
                        available: true
                    },
                    {
                        title: "Mediterranean Chickpea Salad",
                        subtitle: "Chickpeas, olives, cucumber and lemon dressing",
                        price: "$12.99",
                        available: true
                    }
                ]
            },
            {
                title: "Smoothies",
                contents: [
                    {
                        title: "Berry Blast",
                        subtitle: "Strawberry, blueberry and oat milk",
                        price: "$6.49",
                        available: true
                    },
                    {
                        title: "Green Detox",
                        subtitle: "Spinach, pineapple, apple and ginger",
                        price: "$6.99",
                        available: true
                    },
                    {
                        title: "Mango Paradise",
                        subtitle: "Fresh mango, banana and coconut milk",
                        price: "$6.99",
                        available: false
                    },
                    {
                        title: "Peanut Butter Protein",
                        subtitle: "Peanut butter, banana and plant protein",
                        price: "$7.49",
                        available: true
                    }
                ]
            },
            {
                title: "Desserts",
                contents: [
                    {
                        title: "Vegan Brownie",
                        subtitle: "Rich dark chocolate brownie",
                        price: "$5.49",
                        available: true
                    },
                    {
                        title: "Chia Pudding",
                        subtitle: "Vanilla chia pudding with fresh berries",
                        price: "$5.99",
                        available: true
                    }
                ]
            }
        ]
    },

    {
        title: "Plant Oven",
        tagline: "Vegan Italian • Pizza • Pasta",
        rating: "4.8",
        delivery: "$1.99 Delivery",
        eta: "20-30",
        image: require("./assets/images/plant_oven.webp"),
        menu: [
            {
                title: "Pizza",
                contents: [
                    {
                        title: "Margherita",
                        subtitle: "Tomato sauce, vegan mozzarella and basil",
                        price: "$15.99",
                        available: true
                    },
                    {
                        title: "Mediterranean Veggie",
                        subtitle: "Peppers, olives, mushrooms and onions",
                        price: "$17.49",
                        available: true
                    },
                    {
                        title: "Truffle Mushroom",
                        subtitle: "Wild mushrooms with truffle oil",
                        price: "$18.49",
                        available: false
                    },
                    {
                        title: "Spicy Pepper Supreme",
                        subtitle: "Roasted peppers with spicy tomato sauce",
                        price: "$17.99",
                        available: true
                    }
                ]
            },
            {
                title: "Pasta",
                contents: [
                    {
                        title: "Creamy Alfredo",
                        subtitle: "Creamy cashew sauce with fettuccine",
                        price: "$14.99",
                        available: true
                    },
                    {
                        title: "Pesto Penne",
                        subtitle: "Fresh basil pesto with toasted pine nuts",
                        price: "$14.49",
                        available: true
                    },
                    {
                        title: "Arrabbiata",
                        subtitle: "Classic spicy tomato sauce",
                        price: "$13.99",
                        available: true
                    },
                    {
                        title: "Mushroom Carbonara",
                        subtitle: "Creamy mushroom sauce with vegan bacon",
                        price: "$15.99",
                        available: true
                    }
                ]
            },
            {
                title: "Sides",
                contents: [
                    {
                        title: "Garlic Bread",
                        subtitle: "Fresh baked bread with garlic butter",
                        price: "$5.99",
                        available: true
                    },
                    {
                        title: "Rosemary Fries",
                        subtitle: "Crispy fries with rosemary and sea salt",
                        price: "$4.99",
                        available: true
                    }
                ]
            }
        ]
    },

    {
        title: "Fresh Harvest",
        tagline: "Healthy Kitchen • Bowls • Wraps",
        rating: "4.9",
        delivery: "Free Delivery",
        eta: "15-25",
        image: require("./assets/images/fresh_harvest.jpg"),
        menu: [
            {
                title: "Bowls",
                contents: [
                    {
                        title: "Teriyaki Tofu Bowl",
                        subtitle: "Grilled tofu with brown rice and vegetables",
                        price: "$14.99",
                        available: true
                    },
                    {
                        title: "Falafel Bowl",
                        subtitle: "Falafel, hummus and tabbouleh",
                        price: "$13.99",
                        available: true
                    },
                    {
                        title: "Thai Peanut Bowl",
                        subtitle: "Rice noodles with peanut sauce",
                        price: "$14.49",
                        available: true
                    },
                    {
                        title: "Harvest Grain Bowl",
                        subtitle: "Farro, roasted squash and kale",
                        price: "$15.49",
                        available: true
                    }
                ]
            },
            {
                title: "Wraps",
                contents: [
                    {
                        title: "Hummus Veggie Wrap",
                        subtitle: "Fresh vegetables with creamy hummus",
                        price: "$11.99",
                        available: true
                    },
                    {
                        title: "Buffalo Cauliflower Wrap",
                        subtitle: "Crispy cauliflower with spicy sauce",
                        price: "$12.99",
                        available: false
                    },
                    {
                        title: "Avocado Ranch Wrap",
                        subtitle: "Avocado, lettuce and vegan ranch",
                        price: "$12.49",
                        available: true
                    }
                ]
            },
            {
                title: "Soups",
                contents: [
                    {
                        title: "Tomato Basil Soup",
                        subtitle: "Slow-cooked tomato soup",
                        price: "$6.99",
                        available: true
                    },
                    {
                        title: "Lentil Soup",
                        subtitle: "Hearty lentils with herbs",
                        price: "$6.49",
                        available: true
                    }
                ]
            }
        ]
    },
	    {
        title: "Veggie Fiesta",
        tagline: "Mexican • Tacos • Burritos",
        rating: "4.7",
        delivery: "$2.49 Delivery",
        eta: "20-35",
        image: require("./assets/images/veggie_fiesta.jpg"),
        menu: [
            {
                title: "Tacos",
                contents: [
                    {
                        title: "Black Bean Taco",
                        subtitle: "Black beans, salsa and avocado",
                        price: "$4.99",
                        available: true
                    },
                    {
                        title: "Jackfruit Taco",
                        subtitle: "Smoky jackfruit with pickled onions",
                        price: "$5.49",
                        available: false
                    },
                    {
                        title: "Grilled Veggie Taco",
                        subtitle: "Seasonal vegetables and chipotle sauce",
                        price: "$5.29",
                        available: true
                    }
                ]
            },
            {
                title: "Burritos",
                contents: [
                    {
                        title: "Loaded Burrito",
                        subtitle: "Rice, beans, guacamole and vegetables",
                        price: "$13.99",
                        available: true
                    },
                    {
                        title: "Tofu Burrito",
                        subtitle: "Seasoned tofu with salsa verde",
                        price: "$13.49",
                        available: true
                    },
                    {
                        title: "Spicy Bean Burrito",
                        subtitle: "Black beans with spicy tomato salsa",
                        price: "$12.99",
                        available: true
                    }
                ]
            },
            {
                title: "Sides",
                contents: [
                    {
                        title: "Nachos",
                        subtitle: "Corn chips with vegan cheese",
                        price: "$7.99",
                        available: true
                    },
                    {
                        title: "Guacamole & Chips",
                        subtitle: "Fresh guacamole with tortilla chips",
                        price: "$6.99",
                        available: true
                    },
                    {
                        title: "Mexican Rice",
                        subtitle: "Seasoned rice with herbs",
                        price: "$4.99",
                        available: true
                    }
                ]
            }
        ]
    },

    {
        title: "Zen Noodles",
        tagline: "Asian • Ramen • Dumplings",
        rating: "4.8",
        delivery: "Free Delivery",
        eta: "25-40",
        image: require("./assets/images/zen_noodles.jpg"),
        menu: [
            {
                title: "Ramen",
                contents: [
                    {
                        title: "Miso Ramen",
                        subtitle: "Rich miso broth with tofu",
                        price: "$15.99",
                        available: true
                    },
                    {
                        title: "Spicy Tofu Ramen",
                        subtitle: "Chili broth with crispy tofu",
                        price: "$16.49",
                        available: true
                    },
                    {
                        title: "Curry Ramen",
                        subtitle: "Japanese curry broth with vegetables",
                        price: "$16.99",
                        available: false
                    }
                ]
            },
            {
                title: "Rice & Noodles",
                contents: [
                    {
                        title: "Vegetable Fried Rice",
                        subtitle: "Jasmine rice with seasonal vegetables",
                        price: "$12.99",
                        available: true
                    },
                    {
                        title: "Singapore Noodles",
                        subtitle: "Rice noodles with curry spices",
                        price: "$13.99",
                        available: true
                    },
                    {
                        title: "Pad Thai",
                        subtitle: "Rice noodles with tofu and peanuts",
                        price: "$14.99",
                        available: true
                    }
                ]
            },
            {
                title: "Starters",
                contents: [
                    {
                        title: "Vegetable Dumplings",
                        subtitle: "Steamed dumplings with soy dipping sauce",
                        price: "$7.99",
                        available: true
                    },
                    {
                        title: "Spring Rolls",
                        subtitle: "Crispy vegetable spring rolls",
                        price: "$6.99",
                        available: true
                    },
                    {
                        title: "Edamame",
                        subtitle: "Steamed soybeans with sea salt",
                        price: "$5.99",
                        available: true
                    }
                ]
            }
        ]
    }
];

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <TableView>
        <Section
			header=""
			hideSeparator
			separatorTintColor="#ccc"
        >
			{
				restaurants.map((restaurant, index) => (
					<HomeScreenCell
						key={index}
						title={restaurant.title}
						tagline={restaurant.tagline}
						eta={restaurant.eta}
						imgUri={restaurant.image}
						rating={restaurant.rating}
						delivery={restaurant.delivery}
						action={() =>
							navigation.navigate("Menu", {
								title: restaurant.title,
								items: restaurant.menu
							})
						}
					/>
				))
			}
        </Section>
      </TableView>
    </ScrollView>
  );
}

function MenuScreen({ route, navigation }) {  
	const { title, items } = route.params;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: title
		});
	}, [navigation, title]);

	// empty menu handling
	if (!items || items.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>
                    No Menu Available
                </Text>

                <Text style={styles.emptySubtitle}>
                    This restaurant doesn't have any menu items available right now.
                </Text>
            </View>
        );
    }

	return (
		<ScrollView>
			<TableView>
				{items.map((section, index) => (
				<Section
					key={index}
					header={section.title}
				>
					{section.contents.map((item, i) => (
						<Cell
							key={i}
							cellStyle="Basic"
							onPress={() => {
								if (!item.available) {
									return;
								}

								Alert.alert(
									item.title,
									`${item.price}\n\n${item.subtitle}`
								);
							}}
							cellContentView={
								<View style={styles.menuItem}>
									<View style={styles.menuHeader}>
										<Text
											style={[
												styles.menuTitle,
												!item.available && styles.unavailableText
											]}
										>
											{item.title}
										</Text>

										<View style={styles.priceContainer}>
											<Text
												style={[
													styles.menuPrice,
													!item.available && styles.unavailablePrice
												]}
											>
												{item.price}
											</Text>

											{!item.available && (
												<Text style={styles.outOfStock}>
													Out of Stock
												</Text>
											)}
										</View>
									</View>

									<Text
										style={[
											styles.menuSubtitle,
											!item.available && styles.unavailableText
										]}
									>
										{item.subtitle}
									</Text>
								</View>
							}
						/>
					))}
				</Section>
				))}
			</TableView>
		</ScrollView>
	);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
			name="Verdant - Plant-Based Restaurants"
			component={HomeScreen}
        />

        <Stack.Screen
			name="Menu"
			component={MenuScreen}
			options={{
				headerBackTitle: "Back"
			}}
		/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    cell: {
        height: 340,
        marginBottom: 12
    },

    imageContainer: {
		width: "100%",
		aspectRatio: 16 / 9,
		borderRadius: 18,
		overflow: "hidden",
		backgroundColor: "#eee",
	},

	image: {
		width: "100%",
		height: "100%"
	},

    etaBox: {
        position: "absolute",
        right: 16,
        bottom: 16,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4
    },

    etaText: {
        fontSize: 13,
        fontWeight: "700",
        color: "#222"
    },

    title: {
        marginTop: 8,
        fontSize: 24,
        fontWeight: "700",
        color: "#222"
    },

    tagline: {
        marginTop: 1,
        marginBottom: 20,
        fontSize: 15,
        color: "#666"
    },
	menuItem: {
		paddingVertical: 10
	},

	menuHeader: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},

	menuTitle: {
		fontSize: 17,
		fontWeight: "600",
		color: "#222"
	},

	menuPrice: {
		fontSize: 16,
		fontWeight: "700",
		color: "#2E7D32"
	},

	menuSubtitle: {
		marginTop: 4,
		color: "#666",
		fontSize: 14,
		lineHeight: 20
	},
	restaurantInfo: {
		marginTop: 6,
		fontSize: 15,
		fontWeight: "600",
		color: "#2E7D32"
	},
	unavailableText: {
		color: "#999"
	},

	unavailablePrice: {
		color: "#999"
	},

	outOfStock: {
		marginTop: 2,
		fontSize: 11,
		color: "#D32F2F",
		fontWeight: "600"
	},
	emptyContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 32
	},

	emptyTitle: {
		fontSize: 24,
		fontWeight: "700",
		color: "#222",
		marginBottom: 10
	},

	emptySubtitle: {
		fontSize: 16,
		textAlign: "center",
		color: "#666",
		lineHeight: 24
	},
});