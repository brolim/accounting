require 'spec_helper'

describe "nodes/show.html.erb" do
  before(:each) do
    @node = assign(:node, stub_model(Node,
      :name => "Name",
      :balance => 1.5,
      :color => "Color"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Name/)
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1.5/)
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Color/)
  end
end
