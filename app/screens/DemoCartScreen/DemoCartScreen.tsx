import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {Text} from "../../components/Text";
import CartItem from "../../components/CartItem/CartItem";
import { colors } from "../../theme/colors";
import { clothItems } from "../../data/data";
import {Button} from "../../components/Button";
import Screen from "app/components/Screen/Screen";

const MyCart: React.FC = () => {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title} text={"My Cart"} />
        {clothItems.slice(0, 7).map((item) => (
          <CartItem key={item.title} item={item} />
        ))}
        <View style={styles.summaryCard}>
          <View style={styles.summaryItem}>
            <Text text={"Sub Total"} style={styles.textMedium} />
            <View style={styles.textContainer}>
              <Text text={"$30.00"} style={styles.textMedium} />
            </View>
          </View>
          <View style={styles.summaryItem}>
            <Text text={"Delivery Tax"} style={styles.textMedium} />
            <View style={styles.textContainer}>
              <Text text={"$5.00"} style={styles.textMedium} />
            </View>
          </View>
          <View style={styles.summaryItem}>
            <Text text={"Tip"} style={styles.textMedium} />
            <View style={styles.textContainer}>
              <Text text={"$2.00"} style={styles.textMedium} />
            </View>
          </View>
          <View style={styles.summaryItem}>
            <Text text={"Total"} style={styles.textMedium} />
            <View style={styles.textContainer}>
              <Text text={"$37.00"} style={styles.textMedium} />
            </View>
          </View>
        </View>
        <Button
          text={"Checkout"}
          style={styles.button}
          textStyle={styles.buttonLabel}
        />
      </ScrollView>
    </Screen>
      
  );
};

export default MyCart;

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontFamily: "Lato-Black",
    color: colors.text,
    fontSize: 20,
  },
  summaryCard: {
    marginHorizontal: 10,
    width: "100%",
    alignSelf: "center",
    borderBottomColor: colors.text,
    borderBottomWidth: 0.5,
  },
  summaryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.text,
  },
  textContainer: {
    width: "15%",
  },
  textMedium: {
    fontFamily: "Lato-Bold",
    color: colors.text,
    textAlign: "left",
  },
  button: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 20,
  },
  buttonLabel: {
    textAlign: "center",
  },
});
