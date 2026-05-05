/**
 * ============================================================
 *  PERFECT GENTLEMAN — BACKEND CONFIGURATION
 *  Edit these settings to control site behaviour.
 * ============================================================
 */

const SITE_CONFIG = {

  /**
   * DEFAULT LANGUAGE
   * Options: "en" (English) | "no" (Norwegian)
   * Change to "no" to make Norwegian the default.
   */
  defaultLanguage: "en",

  /**
   * CUSTOM CURSOR
   * Set to false to disable the custom cursor and use the browser default.
   */
  customCursorEnabled: false,

  /**
   * GOOGLE REVIEWS
   * Update these numbers if the review count or score changes.
   */
  googleReviews: {
    score: 4.8,
    count: 159,
    link: "https://share.google/YpfbjD3df5ppKz8mH"
  },

  /**
   * BOOKING SYSTEM
   * Set bookingEnabled to true and add the URL when a booking system is ready.
   * The bookingUrl will be used as the href for the booking button.
   */
  booking: {
    enabled: false,
    bookingUrl: "#"  // Replace with real booking URL, e.g. "https://booking.example.com"
  }

};
