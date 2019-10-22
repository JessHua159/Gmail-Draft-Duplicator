/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START apps_script_gmail_quick_start]
/**
 * Returns the array of cards that should be rendered for the current
 * e-mail thread. The name of this function is specified in the
 * manifest 'onTriggerFunction' field, indicating that this function
 * runs every time the add-on is started.
 *
 * @param {Object} e The data provided by the Gmail UI.
 * @return {Card[]}
 */
function buildAddOn(e) {
  
var image = CardService.newImage().setAltText("A nice image").setImageUrl("https://etoro-cdn.etorostatic.com/market-avatars/fb/150x150.png");
// Build image ...
var textParagraph = CardService.newTextParagraph()
    .setText("Select Email Draft");
// Build text paragraph ...

  var numberInput = CardService.newTextInput()
    .setFieldName("text_input_form_input_key")
    .setTitle("Number of Copies")
    .setHint("Enter a whole number");
  
  var drafts = GmailApp.getDrafts();
  
  var checkboxGroup = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.DROPDOWN)
    .setTitle("Select Gmail Draft")
    .setFieldName("checkbox_field")
    .addItem("Amazon", "checkbox_one_value", false)
    .addItem("Microsoft", "checkbox_two_value", true)
    .addItem(drafts[0].getMessage().getSubject(), "checkbox_three_value", false);
  
  var textButton = CardService.newTextButton()
    .setText("Duplicate")
    .setOpenLink(CardService.newOpenLink()
        .setUrl("https://www.google.com"));
  
  var radioGroup = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.RADIO_BUTTON)
    .setTitle("Choose number of copies")
    .setFieldName("checkbox_field")
    .addItem("1", "radio_one_value", true)
    .addItem("2", "radio_two_value", true)
    .addItem("3", "radio_three_value", false)
    .addItem("4", "radio_three_value", true)
    .addItem("5", "radio_three_value", true)
    .addItem("6", "radio_three_value", true)
    .addItem("7", "radio_three_value", true)
    .addItem("8", "radio_three_value", true)
    .addItem("9", "radio_three_value", true)
    .addItem("10", "radio_three_value", true);
  
var cardSection = CardService.newCardSection()
    .addWidget(checkboxGroup)
    .addWidget(radioGroup)
    .addWidget(textButton);
  
var card = CardService.newCardBuilder()
    .setName("Card name")
    .addSection(cardSection)
    .build();
  
return card;
} 

/**
 * Updates the labels on the current thread based on 
 * user selections. Runs via the OnChangeAction for
 * each CHECK_BOX created.
 *
 * @param {Object} e The data provided by the Gmail UI.
*/


