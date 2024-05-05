/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { Link, RouteProp, useRoute } from "@react-navigation/native"
import React, { FC, ReactElement, useEffect, useRef, useState } from "react"
import { Image, ImageStyle, Platform, SectionList, TextStyle, View, ViewStyle } from "react-native"
import { Drawer } from "react-native-drawer-layout"
import { type ContentStyle } from "@shopify/flash-list"
import { ListItem, ListView, ListViewRef, Screen, Text, Icon, iconRegistry, IconTypes } from "../../components"
import { isRTL } from "../../i18n"
import { DemoTabParamList, DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import * as Demos from "./demos"
import { DrawerIconButton } from "./DrawerIconButton"
import { TextInput } from "react-native-gesture-handler"

const iconSearch = require("../../../assets/icons/search.png")
const iconRight = require("../../../assets/icons/arrowRight.png")
const iconClothes = require("../../../assets/icons/clothes.png")
const iconEletronic = require("../../../assets/icons/electronic.png")
const iconBeauty = require("../../../assets/icons/beauty.png")
const iconApplication = require("../../../assets/icons/application.png")
const imgProduct = require("../../../assets/icons/product.jpg")
export interface Demo {
  name: string
  description: string
  data: ReactElement[]
}

interface DemoListItem {
  item: { name: string; useCases: string[] }
  sectionIndex: number
  handleScroll?: (sectionIndex: number, itemIndex?: number) => void
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")

const WebListItem: FC<DemoListItem> = ({ item, sectionIndex }) => {
  const sectionSlug = item.name.toLowerCase()

  return (
    <View>
      <Link to={`/showroom/${sectionSlug}`} style={$menuContainer}>
        <Text preset="bold">{item.name}</Text>
      </Link>
      {item.useCases.map((u) => {
        const itemSlug = slugify(u)

        return (
          <Link key={`section${sectionIndex}-${u}`} to={`/showroom/${sectionSlug}/${itemSlug}`}>
            <Text>{u}</Text>
          </Link>
        )
      })}
    </View>
  )
}

const NativeListItem: FC<DemoListItem> = ({ item, sectionIndex, handleScroll }) => (
  <View>
    <Text onPress={() => handleScroll?.(sectionIndex)} preset="bold" style={$menuContainer}>
      {item.name}
    </Text>
    {item.useCases.map((u, index) => (
      <ListItem
        key={`section${sectionIndex}-${u}`}
        onPress={() => handleScroll?.(sectionIndex, index + 1)}
        text={u}
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
      />
    ))}
  </View>
)

const ShowroomListItem = Platform.select({ web: WebListItem, default: NativeListItem })

export const DemoShowroomScreen: FC<DemoTabScreenProps<"DemoShowroom">> =
  function DemoShowroomScreen(_props) {
    const [open, setOpen] = useState(false)
    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const listRef = useRef<SectionList>(null)
    const menuRef = useRef<ListViewRef<DemoListItem["item"]>>(null)
    const route = useRoute<RouteProp<DemoTabParamList, "DemoShowroom">>()
    const params = route.params

    // handle Web links
    React.useEffect(() => {
      if (params !== undefined && Object.keys(params).length > 0) {
        const demoValues = Object.values(Demos)
        const findSectionIndex = demoValues.findIndex(
          (x) => x.name.toLowerCase() === params.queryIndex,
        )
        let findItemIndex = 0
        if (params.itemIndex) {
          try {
            findItemIndex =
              demoValues[findSectionIndex].data.findIndex(
                (u) => slugify(u.props.name) === params.itemIndex,
              ) + 1
          } catch (err) {
            console.error(err)
          }
        }
        handleScroll(findSectionIndex, findItemIndex)
      }
    }, [params])

    const toggleDrawer = () => {
      if (!open) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }

    const handleScroll = (sectionIndex: number, itemIndex = 0) => {
      listRef.current?.scrollToLocation({
        animated: true,
        itemIndex,
        sectionIndex,
      })
      toggleDrawer()
    }

    const scrollToIndexFailed = (info: {
      index: number
      highestMeasuredFrameIndex: number
      averageItemLength: number
    }) => {
      listRef.current?.getScrollResponder()?.scrollToEnd()
      timeout.current = setTimeout(
        () =>
          listRef.current?.scrollToLocation({
            animated: true,
            itemIndex: info.index,
            sectionIndex: 0,
          }),
        50,
      )
    }

    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current)
    }, [])

    const $drawerInsets = useSafeAreaInsetsStyle(["top"])

    return (
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        drawerType={"slide"}
        drawerPosition={isRTL ? "right" : "left"}
        renderDrawerContent={() => (
          <View style={[$drawer, $drawerInsets]}>
            {
              <Text>Hello there</Text>
            /* <View style={$logoContainer}>
              <Image source={logo} style={$logoImage} />
            </View>

            <ListView<DemoListItem["item"]>
              ref={menuRef}
              contentContainerStyle={$listContentContainer}
              estimatedItemSize={250}
              data={Object.values(Demos).map((d) => ({
                name: d.name,
                useCases: d.data.map((u) => u.props.name as string),
              }))}
              keyExtractor={(item) => item.name}
              renderItem={({ item, index: sectionIndex }) => (
                <ShowroomListItem {...{ item, sectionIndex, handleScroll }} />
              )}
            /> */}
          </View>
        )}
      >
        <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
          <DrawerIconButton onPress={toggleDrawer} />
              <View style={$search}>
                <Image source={iconSearch} style={$iconSearch} />
                <TextInput
                  style={$inputSearch}
                  placeholder={'Search product'}
                />
              </View>

              <View style={$listCategory}>
                <View style={$categoryHead}>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>Category</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', gap: -4}}>
                    <Text>View All</Text>
                    <Image source={iconRight} style={$iconSearch} />
                  </View>
                </View>
                <View style={$categoryBody}>
                  <View style={$categoryList}>
                    <View style={$categoryItem}>
                      <Image source={iconClothes} style={$iconSearch} />
                    </View>
                    <Text>Fashion</Text>
                  </View>
                  <View style={$categoryList}>
                    <View style={$categoryItem}>
                      <Image source={iconEletronic} style={$iconSearch} />
                    </View>
                    <Text>Fashion</Text>
                  </View>
                  <View style={$categoryList}>
                    <View style={$categoryItem}>
                      <Image source={iconBeauty} style={$iconSearch} />
                    </View>
                    <Text>Fashion</Text>
                  </View>
                  <View style={$categoryList}>
                    <View style={$categoryItem}>
                      <Image source={iconApplication} style={$iconSearch} />
                    </View>
                    <Text>Fashion</Text>
                  </View>
                  
                </View>
              </View>

              <View style={$discountContainer}>
                <View style={$categoryHead}>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>Deal of the day</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', gap: -4}}>
                    <Text>View All</Text>
                    <Image source={iconRight} style={$iconSearch} />
                  </View>
                </View>
                <View style={$discountBody}>
                  <View style={$discountItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{alignItems: 'center', gap: 4, marginTop: 4}}>
                      <Text style={$discountItemName}>Running Shoe</Text>
                      <View style={{borderRadius: 6, padding: 6, backgroundColor: 'red',}}>
                        <Text style={$discountItemSale}>upto 40% OFF</Text>
                      </View>
                    </View>
                  </View>
                  <View style={$discountItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{alignItems: 'center', gap: 4, marginTop: 4}}>
                      <Text style={$discountItemName}>Running Shoe</Text>
                      <View style={{borderRadius: 6, padding: 6, backgroundColor: 'red',}}>
                        <Text style={$discountItemSale}>upto 40% OFF</Text>
                      </View>
                    </View>
                  </View>
                  
                  <View style={$discountItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{alignItems: 'center', gap: 4, marginTop: 4}}>
                      <Text style={$discountItemName}>Running Shoe</Text>
                      <View style={{borderRadius: 6, padding: 6, backgroundColor: 'red',}}>
                        <Text style={$discountItemSale}>upto 40% OFF</Text>
                      </View>
                    </View>
                  </View>

                  <View style={$discountItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{alignItems: 'center', gap: 4, marginTop: 4}}>
                      <Text style={$discountItemName}>Running Shoe</Text>
                      <View style={{borderRadius: 6, padding: 6, backgroundColor: 'red',}}>
                        <Text style={$discountItemSale}>upto 40% OFF</Text>
                      </View>
                    </View>
                  </View>

                </View>
              </View> 

              <View style={$listProduct}>
                <View style={$categoryHead}>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>Recommoneded for you</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', gap: -4}}>
                    <Text>View All</Text>
                    <Image source={iconRight} style={$iconSearch} />
                  </View>
                </View>

                <View style={$listProductBody}>
                  <View style={$productItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{flexDirection: 'column', gap: 6}}>
                      <Text style={$productName}>Adidas white sneakers for men</Text>
                      <View style={{flexDirection: 'row', gap: 8}}>
                        <Text style={$productPrice}>$68</Text>
                        <Text style={$productSale}>$134</Text>
                        <Text style={$productDiscount}>50% OFF</Text>
                      </View>
                      <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                        <Image source={imgProduct} style={$iconstar} />
                        <Text style={$productRating}>4.8</Text>
                        <Text style={$productComment}>(545)</Text>
                      </View>
                    </View>
                  </View>

                  <View style={$productItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{flexDirection: 'column', gap: 6}}>
                      <Text style={$productName}>Adidas white sneakers for men</Text>
                      <View style={{flexDirection: 'row', gap: 8}}>
                        <Text style={$productPrice}>$68</Text>
                        <Text style={$productSale}>$134</Text>
                        <Text style={$productDiscount}>50% OFF</Text>
                      </View>
                      <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                        <Image source={imgProduct} style={$iconstar} />
                        <Text style={$productRating}>4.8</Text>
                        <Text style={$productComment}>(545)</Text>
                      </View>
                    </View>
                  </View>

                  <View style={$productItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{flexDirection: 'column', gap: 6}}>
                      <Text style={$productName}>Adidas white sneakers for men</Text>
                      <View style={{flexDirection: 'row', gap: 8}}>
                        <Text style={$productPrice}>$68</Text>
                        <Text style={$productSale}>$134</Text>
                        <Text style={$productDiscount}>50% OFF</Text>
                      </View>
                      <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                        <Image source={imgProduct} style={$iconstar} />
                        <Text style={$productRating}>4.8</Text>
                        <Text style={$productComment}>(545)</Text>
                      </View>
                    </View>
                  </View>

                  <View style={$productItem}>
                    <Image source={imgProduct} style={$imgProduct} />
                    <View style={{flexDirection: 'column', gap: 6}}>
                      <Text style={$productName}>Adidas white sneakers for men</Text>
                      <View style={{flexDirection: 'row', gap: 8}}>
                        <Text style={$productPrice}>$68</Text>
                        <Text style={$productSale}>$134</Text>
                        <Text style={$productDiscount}>50% OFF</Text>
                      </View>
                      <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                        <Image source={imgProduct} style={$iconstar} />
                        <Text style={$productRating}>4.8</Text>
                        <Text style={$productComment}>(545)</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>


           {/* <SectionList
            ref={listRef}
            // contentContainerStyle={$sectionListContentContainer}
            stickySectionHeadersEnabled={false}
            // sections={Object.values(Demos)}
            // renderItem={({ item }) => item}
            // renderSectionFooter={() => <View style={$demoUseCasesSpacer} />}
            // ListHeaderComponent={
            //   <View style={$heading}>
            //     <Text preset="heading" tx="demoShowroomScreen.jumpStart" />
            //   </View>
            // }
            onScrollToIndexFailed={scrollToIndexFailed}
            // renderSectionHeader={({ section }) => {
            //   return (
            //     <View>
            //       <Text preset="heading" style={$demoItemName}>
            //         {section.name}
            //       </Text>
            //       <Text style={$demoItemDescription}>{section.description}</Text>
            //     </View>
            //   )
            // }}
          />  */}
        </Screen>
      </Drawer>
    )
  }

const $screenContainer: ViewStyle = {
  // flex: 1,
  backgroundColor: '#ffff'
}

const $drawer: ViewStyle = {
  backgroundColor: '#ffff',
  // flex: 1,
}

const $search: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  margin: 16,
  borderWidth: 2,
  borderColor: '#ddd',
  borderRadius: 6,
  height: 52,
  // flex: 1,
}

const $iconSearch: ViewStyle = {
  height: 22,
  width: 22,
  margin: 12,
}

const $inputSearch: ViewStyle = {
  height: 52, 
  width: 282,
  fontSize: 20,
  color: '#333', 
}

const $listCategory: ViewStyle = {
  margin: 16,
}

const $categoryHead: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}


const $categoryBody: ViewStyle = {
  flexDirection: 'row',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'space-between'
}

const $categoryList: ViewStyle = {
  
  
}

const $categoryItem: ViewStyle = {
  width: 60,
  height: 60,
  backgroundColor: '#ecfdf5',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 60,
  marginBottom: 4,
}

const $discountContainer: ViewStyle = {
  backgroundColor: '#eee',
  padding: 16
}

const $discountBody: ViewStyle = {
  backgroundColor: '#ffff',
  borderRadius: 6,
  padding: 12,
  marginTop: 12,
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  gap: 8,
}

const $discountItem: ViewStyle = {
  width: '48%',
  flexDirection: 'column',
  height: 200,
}

const $imgProduct: ViewStyle = {
  width: '100%',
  height: 140,
  borderRadius: 8,
}

const $discountItemName: ViewStyle = {
  fontSize: 16,
  fontWeight: '700'
}

const $discountItemSale: ViewStyle = {
  fontSize: 14,
  color: '#fff',
  lineHeight: 16
}

const $listProduct: ViewStyle = {
  padding: 16,
}

const $listProductBody: ViewStyle = {
  flexDirection:'row',
  width: '100%',
  gap: 10,
  flexWrap: 'wrap'
}

const $productItem: ViewStyle = {
  width: '48%',
  // height: 200,

}

const $iconstar: ViewStyle = {
  width: 18,
  height: 18,
}

const $productName: ViewStyle = {
  fontSize: 16,
  color: '#333',
  lineHeight: 16,
  marginTop: 4
}

const $productPrice: ViewStyle = {
  fontweight: 700,
  fontSize: 18,
}

const $productSale: ViewStyle = {
  fontSize: 14,
  color: '#ccc'

}

const $productDiscount: ViewStyle = {
  color: '#ea580c',
}

const $productRating: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 6,
}

const $productComment: ViewStyle = {

}