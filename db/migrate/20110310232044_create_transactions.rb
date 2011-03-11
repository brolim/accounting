class CreateTransactions < ActiveRecord::Migration
  def self.up
    create_table :transactions do |t|
      t.string :transaction_type
      t.float :value
      t.references :node

      t.timestamps
    end
  end

  def self.down
    drop_table :transactions
  end
end
