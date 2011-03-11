require 'spec_helper'

describe Transaction do
    it "should be instantiated" do
        Transaction.new.should be_an_instance_of(Transaction)
    end

    it "should be saved successfully" do
        Transaction.create.should be_persisted
    end
end
