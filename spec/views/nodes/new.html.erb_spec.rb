require 'spec_helper'

describe "nodes/new.html.erb" do
  before(:each) do
    assign(:node, stub_model(Node,
      :name => "MyString",
      :balance => 1.5,
      :color => "MyString"
    ).as_new_record)
  end

  it "renders new node form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => nodes_path, :method => "post" do
      assert_select "input#node_name", :name => "node[name]"
      assert_select "input#node_balance", :name => "node[balance]"
      assert_select "input#node_color", :name => "node[color]"
    end
  end
end
