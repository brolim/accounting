require 'spec_helper'

describe Node do
    it "should be instantiated" do
        Node.new.should be_an_instance_of(Node)
    end

    it "should be saved successfully" do
        Node.create.should be_persisted
    end
end
