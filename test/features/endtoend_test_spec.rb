require 'test_helper.rb'

feature "Seeing instructions", js: true do
  scenario "Should be able to see a list of instructions" do
    visit '/'
    expect(page).to have_content("Chop! Blend! Mash!")
  end
end
