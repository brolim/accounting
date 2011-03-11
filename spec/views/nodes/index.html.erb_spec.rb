require 'spec_helper'

describe "nodes/index.html.erb" do
  before(:each) do
    assign(:nodes, [
      stub_model(Node,
        :name => "Name",
        :balance => 1.5,
        :color => "Color"
      ),
      stub_model(Node,
        :name => "Name",
        :balance => 1.5,
        :color => "Color"
      )
    ])
  end

  it "renders a list of nodes" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Color".to_s, :count => 2
  end
end
