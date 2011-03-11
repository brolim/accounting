require 'spec_helper'

describe "nodes/edit.html.erb" do
  before(:each) do
    @node = assign(:node, stub_model(Node,
      :name => "MyString",
      :balance => 1.5,
      :color => "MyString"
    ))
  end

  it "renders the edit node form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => nodes_path(@node), :method => "post" do
      assert_select "input#node_name", :name => "node[name]"
      assert_select "input#node_balance", :name => "node[balance]"
      assert_select "input#node_color", :name => "node[color]"
    end
  end
end
