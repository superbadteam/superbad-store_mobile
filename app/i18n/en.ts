const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out",
    search: "Search",
    selectImage: "Select image",
    removeAll: "Remove all",
    type: "Type",
  },
  welcomeScreen: {
    postscript:
      "Let's go shopping! Find the best deals on the latest products. You can even create your own products to sell!",
    readyForLaunch: "Ready for launch!",
    exciting: "(ohh, this is exciting!)",
    letsGo: "Let's go!",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },

  errors: {
    invalidEmail: "Invalid email address.",
  },
  loginScreen: {
    signIn: "Sign In",
    nextScreen: "Sign Up",
    enterDetails:
      "Enter your details below to unlock top secret info. You'll never guess what we've got waiting. Or maybe you will; it's not rocket science here.",
    emailFieldLabel: "Email",
    passwordFieldLabel: "Password",
    emailFieldPlaceholder: "Enter your email address",
    passwordFieldPlaceholder: "Super secret password here",
    tapToSignIn: "Tap to sign in!",
    hint: "Hint: you can use any email address and your favorite password :)",
    loginWithEmail: "Login with Email",
    login: "Login",
    forgotPassword: "Forgot Password?",
  },
  signUp: {
    signUp: "Sign up",
    signUpWithEmail: "Sign up with Email",
    nameFieldPlaceholder: "Full Name",
    emailFieldPlaceholder: "Email Id",
    passwordFieldPlaceholder: "Password",
    passwordConfirmFieldPlaceholder: "Confirm Password",
    nameFieldLabel: "Full Name",
    emailFieldLabel: "Email",
    passwordFieldLabel: "Password",
    passwordConfirmFieldLabel: "Confirm Password",
  },
  demoNavigator: {
    componentsTab: "Components",
    debugTab: "Debug",
    communityTab: "Community",
    podcastListTab: "Podcast",
    cartListTab: "Cart",
  },
  demoCommunityScreen: {
    title: "Connect with the community",
    tagLine:
      "Plug in to Infinite Red's community of React Native engineers and level up your app development with us!",
    joinUsOnSlackTitle: "Join us on Slack",
    joinUsOnSlack:
      "Wish there was a place to connect with React Native engineers around the world? Join the conversation in the Infinite Red Community Slack! Our growing community is a safe space to ask questions, learn from others, and grow your network.",
    joinSlackLink: "Join the Slack Community",
    makeIgniteEvenBetterTitle: "Make Ignite even better",
    makeIgniteEvenBetter:
      "Have an idea to make Ignite even better? We're happy to hear that! We're always looking for others who want to help us build the best React Native tooling out there. Join us over on GitHub to join us in building the future of Ignite.",
    contributeToIgniteLink: "Contribute to Ignite",
    theLatestInReactNativeTitle: "The latest in React Native",
    theLatestInReactNative: "We're here to keep you current on all React Native has to offer.",
    reactNativeRadioLink: "React Native Radio",
    reactNativeNewsletterLink: "React Native Newsletter",
    reactNativeLiveLink: "React Native Live",
    chainReactConferenceLink: "Chain React Conference",
    hireUsTitle: "Hire Infinite Red for your next project",
    hireUs:
      "Whether it's running a full project or getting teams up to speed with our hands-on training, Infinite Red can help with just about any React Native project.",
    hireUsLink: "Send us a message",
  },
  demoHomePageScreen: {
    home : "Home",
    placeholderSearch: "Search product",
    categoryList: "Category",
    viewAll: "View All",
    recommended: "Recommended for you",
  },
  demoDebugScreen: {
    howTo: "HOW TO",
    title: "Debug",
    tagLine:
      "Congratulations, you've got a very advanced React Native app template here.  Take advantage of this boilerplate!",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    demoList: "Demo List",
    demoPodcastList: "Demo Podcast List",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
  },
  demoPodcastListScreen: {
    title: "React Native Radio episodes",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel: "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },
  demoCartListScreen: {
    title: "My Cart",
    summary: "Price Detail ({{count}} items)",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel: "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    totalPrice: "Total Price",
    discount: "Discount",
    deliveryFee: "Delivery fee",
    totalAmount: "Total Amount",
    button: {
      continue: "Continue",
    },
    cartItem: {
      delete: "Delete",
      cancel: "Cancel",
      titleAlert: "Delete Item",
      question: "Are you sure you want to delete this item from your cart?",
      success: "Item deleted from cart",
      brand: "{{brand}}",
      itemPrice: "{{itemPrice}}",
      title: "{{title}}",
      quantityPrice: "${{quantityPrice}}",
    },
    quantity: "{{quantity}}",
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
    summaryPrice: "${{summaryPrice}}",
  },
  DemoCreateProductScreen: {
    create : "Create",
    createProduct: "Create Product",
    label: {
      productName: "Product Name",
      price: "Price ($)",
      description: "Description",
      discount: "Discount (%)",
      category: "Category",
      subCategory: "Subcategory",
      condition: "Condition",
      uploadImage: "Upload Image",
      quantity: "Quantity",
    },
    notification: {
      createSuccess: "Product created successfully",
      createError: "Error creating product",
    },
    placeholder: {
      productName: "Enter product name",
      price: "Ex: 100",
      description: "Enter product description",
      discount: "Ex: 10",
      selectCategory: "Select category",
      selectSubCategory: "Select subcategory",
      itemType: "Enter type",
      quantity: "Enter quantity",
    },
    upload: "Upload",
    title: "Create product",
    submit: "Submit",
  },
  demoWriteReviewScreen: {
    title: "Write Review",
    addPhoto: "Add Photo",
    submitReview: "Submit Review",
    label: {
      headingReview: "Heading of your review",
      writeYourReview: "Write your review",
    },
    productName: "{{productName}}",
    submit: "Submit",
    messageSubmit: "Review Submitted",
    descriptionSubmit: "Your review has been successfully submitted.",
  },
  productDetailScreen: {
    productDetail : "My Product",
    size: "Type",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    review: "Reviews",
    notification: {
      addSuccess: "Add product to cart successfully",
      addError: "Error add product to cart",
    },
  },
  listReview: {
    title: "Rating & Reviews",
    overal: "Overall Rating",
    ratingText: "Rating",
    rateBtn: "Rate",
  },
  FilterProductsScreen: {
    placeholder: "Name product",
    title: {
      filter: "Filters",
      sortBy: "Sort By",
    },
    sortBy: {
      priceHighToLow: "Price High to Low",
      priceLowToHigh: "Price Low to High",
      popularity: "Popularity",
      discount: "Discount",
      customerRating: "Customer Rating",
    },
     productItem: {
      sold: "Sold",
    },
    notFound: "No Results Found",
    results: "results",
  },
 productItem: {
    sold: "Sold",
  },
};

export default en;
export type Translations = typeof en;
