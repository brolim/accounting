require 'spec_helper'

describe "transactions/edit.html.erb" do
  before(:each) do
    @transaction = assign(:transaction, stub_model(Transaction,
      :transaction_type => "MyString",
      :value => 1.5,
      :node => nil
    ))
  end

  it "renders the edit transaction form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => transactions_path(@transaction), :method => "post" do
      assert_select "input#transaction_transaction_type", :name => "transaction[transaction_type]"
      assert_select "input#transaction_value", :name => "transaction[value]"
      assert_select "input#transaction_node", :name => "transaction[node]"
    end
  end
end
