class CreateNodes < ActiveRecord::Migration
  def self.up
    create_table :nodes do |t|
      t.string :name
      t.float :balance
      t.string :color

      t.timestamps
    end
  end

  def self.down
    drop_table :nodes
  end
end
