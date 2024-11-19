/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C3wLbWyD.mjs';
import { $ as $$Navigation, a as $$Footer } from '../chunks/Footer_BfcYL_pV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://wrapitmoving.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="w-full mx-auto max-w-7xl items-center py-12 pb-12" id="contact"> <div class="bg-gray-100 p-8 rounded-3xl"> <div class="form-container mx-auto bg-white p-8 rounded-3xl" style="max-width: 7xl; border: 1px solid #cbd5e0;"> <h3 style="text-align: center; font-size: 1.6rem; margin-bottom: 10px;">
Get A Free Quote Now
</h3> <form id="quoteForm" action="/api/send" method="post" enctype="multipart/form-data"> <div style="display: flex; justify-content: space-between; margin-top: 20px;"> <div style="flex-basis: 48%;"> <strong><label for="move_date" style="display: block; font-size: 18px; margin-top: 10px; margin-bottom: 5px;">PREFERRED MOVE DATE</label></strong> <!-- Single date input for both selection and display --> <input type="date" id="move_date" name="move_date" style="width: 100%; padding: 0.75em; border-radius: 5px; border: 1px solid #cbd5e0;"> </div> </div> <div style="display: flex; justify-content: space-between; margin-top: 20px;"> <div style="flex-basis: 48%;"> <strong><label for="moving_from" style="display: block; font-size: 18px; margin-bottom: 5px;">MOVING FROM *</label></strong> <input type="text" id="moving_from" name="moving_from" style="width: 100%; padding: 0.75em; border-radius: 5px; border: 1px solid #cbd5e0;" placeholder="Enter a location including city" required> <select id="moving_from_type" name="moving_from_type" style="width: 100%; padding: 0.75em; margin-top: 10px; border-radius: 5px; border: 1px solid #cbd5e0;"> <option value="House">House</option> <option value="Apartment">Apartment</option> <option value="Condo">Condo</option> <option value="Townhouse">Townhouse</option> <option value="Studio">Studio</option> <option value="Office">Office</option> <option value="Delivery Pick-up">Delivery Pick-up</option> <option value="Others">Others</option> </select> <div style="margin-top: 10px;"> <strong><label style="font-size: 18px;">Elevator available:</label></strong> <input type="radio" id="elevator_from_yes" name="elevator_from" value="Yes"><label for="elevator_from_yes" style="margin-right: 10px;">Yes</label> <input type="radio" id="elevator_from_no" name="elevator_from" value="No"><label for="elevator_from_no">No</label> </div> <select id="bedrooms_from" name="bedrooms_from" style="width: 100%; padding: 0.75em; margin-top: 10px; border-radius: 5px; border: 1px solid #cbd5e0;"> <option value="">Bedroom(s)</option> <option value="1">1 Bedroom</option> <option value="2">2 Bedrooms</option> <option value="3">3 Bedrooms</option> <option value="4">4 Bedrooms</option> <option value="5">5 Bedrooms</option> </select> </div> <div style="flex-basis: 48%;"> <strong><label for="moving_to" style="display: block; font-size: 18px; margin-bottom: 5px;">MOVING TO *</label></strong> <input type="text" id="moving_to" name="moving_to" style="width: 100%; padding: 0.75em; border-radius: 5px; border: 1px solid #cbd5e0;" placeholder="Enter a location including city" required> <select id="moving_to_type" name="moving_to_type" style="width: 100%; padding: 0.75em; margin-top: 10px; border-radius: 5px; border: 1px solid #cbd5e0;"> <option value="House">House</option> <option value="Apartment">Apartment</option> <option value="Condo">Condo</option> <option value="Townhouse">Townhouse</option> <option value="Studio">Studio</option> <option value="Office">Office</option> <option value="Delivery Drop-off">Delivery Drop-off</option> <option value="Others">Others</option> </select> <div style="margin-top: 10px;"> <strong><label style="font-size: 18px;">Elevator available:</label></strong> <input type="radio" id="elevator_to_yes" name="elevator_to" value="Yes"><label for="elevator_to_yes" style="margin-right: 10px;">Yes</label> <input type="radio" id="elevator_to_no" name="elevator_to" value="No"><label for="elevator_to_no">No</label> </div> <select id="bedrooms_to" name="bedrooms_to" style="width: 100%; padding: 0.75em; margin-top: 10px; border-radius: 5px; border: 1px solid #cbd5e0;"> <option value="">Bedroom(s)</option> <option value="1">1 Bedroom</option> <option value="2">2 Bedrooms</option> <option value="3">3 Bedrooms</option> <option value="4">4 Bedrooms</option> <option value="5">5 Bedrooms</option> </select> </div> </div> <div style="display: flex; justify-content: space-between; margin-top: 20px;"> <div style="flex-basis: 48%;"> <strong><label for="name" style="display: block; font-size: 18px; margin-bottom: 5px;">NAME *</label></strong> <input type="text" id="name" name="name" style="width: 100%; padding: 0.75em; border-radius: 5px; border: 1px solid #cbd5e0;" required> </div> <div style="flex-basis: 48%;"> <strong><label for="email" style="display: block; font-size: 18px; margin-bottom: 5px;">EMAIL *</label></strong> <input type="email" id="email" name="email" style="width: 100%; padding: 0.75em; border-radius: 5px; border: 1px solid #cbd5e0;" required> </div> </div> <div style="display: flex; justify-content: space-between; margin-top: 20px;"> <div style="flex-basis: 48%;"> <strong><label for="phone" style="display: block; font-size: 18px; margin-bottom: 5px;">PHONE *</label></strong> <input type="tel" id="phone" name="phone" style="width: 100%; padding: 0.75em; border-radius: 5px; border: 1px solid #cbd5e0;" required> </div> </div> <div style="margin-top: 20px;"> <strong><label for="additional_services" style="display: block; font-size: 18px; margin-bottom: 5px;">ADDITIONAL SERVICE(S)</label></strong> <div> <input type="radio" id="junk_removal" name="additional_services" value="Junk Removal"> <label for="junk_removal" style="font-size: 18px;">Junk Removal</label> </div> <div> <input type="radio" id="single_item_move" name="additional_services" value="Single Item/Furniture Move"> <label for="single_item_move" style="font-size: 18px;">Single Item/Furniture Move</label> </div> <div> <input type="radio" id="long_distance_move" name="additional_services" value="Long Distance"> <label for="long_distance_move" style="font-size: 18px;">Long Distance</label> </div> </div> <div style="margin-top: 20px;"> <strong><label for="find_us" style="display: block; font-size: 18px; margin-bottom: 5px;">HOW DID YOU FIND US?</label></strong> <select id="find_us" name="find_us" style="width: 100%; padding: 0.75em; border-radius: 5px; border: 1px solid #cbd5e0;"> <option value="Google">Google</option> <option value="Facebook">Facebook</option> <option value="Instagram">Instagram</option> <option value="Tik-Tok">Tik-Tok</option> <option value="Referral">Referral</option> <option value="Others">Twitter</option> <option value="Others">Others</option> <!-- Text Box for 'Others' input --> </select><input type="text" id="otherFindUs" name="other_find_us" style="width: 100%; padding: 0.75em; margin-top: 10px; border-radius: 5px; border: 1px solid #cbd5e0; display: none;" placeholder="Please specify how you found us"> </div> <div style="
        margin-top: 20px;
        padding: 10px;
        border: 1px solid #cbd5e0;
        border-radius: 5px;
        background-color: #f9f9f9;
    "> <strong> <label for="photos_reference" style="display: block; font-size: 18px; margin-bottom: 5px;">
PHOTOS FOR REFERENCE (Size limit of 5mb per
                                file)
</label> </strong> <!-- Custom file input wrapper --> <div style="display: flex; align-items: center; gap: 10px;"> <button type="button" id="customFileButton" style="
                background-color: #FF5034;
                color: white;
                padding: 10px 15px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            ">
Add Files
</button> <input type="file" id="photos_reference" name="photos_reference" style="display: none;" multiple> </div> <!-- File list container --> <div id="fileList" style="
            margin-top: 10px;
            padding: 10px;
            max-height: 150px;
            overflow-y: auto;
            background-color: white;
            border: 1px solid #cbd5e0;
            border-radius: 5px;
        "></div> </div> <div style="margin-top: 20px;"> <strong><label for="additional_info" style="display: block; font-size: 18px; margin-bottom: 5px;">ADDITIONAL INFORMATION</label></strong> <textarea id="additional_info" name="additional_info" style="width: 100%; height: 170px; padding: 0.75em; border-radius: 5px; border: 1px solid #cbd5e0;"></textarea> </div> <div style="text-align: center; margin-top: 20px;"> <input type="submit" value="Submit for Free Quote" style="background-color: #FF5034; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer;"> </div> </form> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})}    ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
