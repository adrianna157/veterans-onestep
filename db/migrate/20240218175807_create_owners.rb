class CreateOwners < ActiveRecord::Migration[7.0]
  def change
    create_table :owners do |t|
      t.string :name
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
